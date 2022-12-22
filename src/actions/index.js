import { auth, provider, storage } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});
export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});
export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => console.log(error));

    // auth
    //   .signInWithPopup(provider)
    //   .then((payload) => {
    //     dispatch(setUser(payload.user));
    //   })
    //   .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}
export function singnoutAPI() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}

// export function postArticleAPI(payload) {
//   return (dispatch) => {
//     if (payload.image !== "") {
//       const upload = storage
//         .ref(`images/${payload.image.name}`)
//         .put(payload.image);

//       upload.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           if (snapshot.state === "RUNNING") {
//             console.log(`Progress: ${progress}%`);
//           }
//         },
//         (error) => console.log(error.code),
//         async () => {
//           const downloadURL = await upload.snapshot.ref.getDownloadURL();
//           db.collection("articles").add({
//             actor: {
//               description: payload.user.email,
//               title: payload.user.displayName,
//               date: payload.timestamp,
//               image: payload.user.photoURL,
//             },
//             video: payload.video,
//             sharedImg: downloadURL,
//             Comments: 0,
//             description: payload.description,
//           });
//         }
//       );
//     }
//   };
// }
export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (payload.image) {
      const storageRef = ref(storage, `images/${payload.image.name}`);

      const uploadTask = uploadBytesResumable(storageRef, payload.image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error)
      );

      uploadTask.then(async (snapshot) => {
        console.log(snapshot);
        // Upload completed successfully, now we can get the download URL
        if (snapshot) {
          // const downloadURL = await storage.snapshot.ref.getDownloadURL();
          const downloadURL = await getDownloadURL(snapshot.ref);

          if (downloadURL) {
            console.log(payload);
            console.log(downloadURL);
            addDoc(collection(db, "articles"), {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              video: payload.video,
              sharedImg: downloadURL,
              Comments: 0,
              description: payload.description,
            });
            dispatch(setLoading(false));
          }
        }
      });
    } else if (payload.video) {
      addDoc(collection(db, "articles"), {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        Comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}
export function getArticleAPI() {
  return (dispatch) => {
    const querySnapshot = collection(db, "articles");
    //     // .orderBy("actor.date", "desc")

    onSnapshot(querySnapshot, (snapshot) => {
      let payload = snapshot.docs.map((doc) => doc.data());

      dispatch(getArticles(payload));
    });
  };
}
