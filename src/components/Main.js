import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import styled from "styled-components";
import Postmodel from "./Postmodel";
import { getArticleAPI } from "../actions";
import ReactPlayer from "react-player";

const Main = (props) => {
  const [showModel, setShowModel] = useState("close");
  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModel) {
      case "open":
        setShowModel("close");

        break;
      case "close":
        setShowModel("open");
        break;

      default:
        setShowModel("close");
        break;
    }
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <p>There are no Articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="./images/user.svg" alt="" />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a post
              </button>
            </div>
            <div>
              <button>
                <img src="./images/photo-search.svg" alt="" />
                <span>Photo</span>
              </button>
              <button>
                <img src="./images/video-icon.svg" alt="" />
                <span>Video</span>
              </button>
              <button>
                <img src="./images/event-icon.svg" alt="" />
                <span>Event</span>
              </button>
              <button>
                <img src="./images/article-icon.svg" alt="" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && <img src="./images/olympic-athlete.gif" alt="" />}
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article>
                  <SharedActor>
                    <a href=".">
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {/* {article.actor.date.toDate().toLocaleDateString()} */}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src="./images/ellipsis.svg" alt="" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImage>
                    <a href=".">
                      {!article.sharedIMG && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} />
                      ) : (
                        article.sharedImg && (
                          <img src={article.sharedImg} alt="" />
                        )
                      )}
                    </a>
                  </SharedImage>
                  <SocialCount>
                    <li>
                      <button>
                        <img src="./images/thumb-icon.svg" alt="" />
                        <img src="./images/heart-icon.svg" alt="" />
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a href=".">2 comments</a>
                    </li>
                  </SocialCount>
                  <SocialAction>
                    <button>
                      <img src="./images/thumb-icon.svg" alt="" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="./images/message-icon.svg" alt="" />
                      <span>Comments</span>
                    </button>
                    <button>
                      <img src="./images/shared-icon.svg" alt="" />
                      <span>Share</span>
                    </button>
                    <button>
                      <img src="./images/send-icon.svg" alt="" />
                      <span>Send</span>
                    </button>
                  </SocialAction>
                </Article>
              ))}
            <Postmodel showModel={showModel} handleClick={handleClick} />
          </Content>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  grid-area: Main;
`;
const CommonCard = styled.div`
  text-align: center;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
  padding: 12px;
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #958b7b;
  margin: 0 0 8px;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border: 2px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        padding-left: 16px;
        text-align: left;
        background-color: white;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          height: 26px;
          width: 26px;
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  display: flex;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  a {
    text-decoration: none;
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      line-height: 1.33;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
    }
    span {
      text-align: left;
      &:first-child {
        font-size: 14px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }
      &:nth-child(n + 1) {
        color: rgba(0, 0, 0, 0.6);
        font-size: 12px;
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
`;
const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCount = styled.ul`
  display: flex;
  line-height: 1.33;
  align-items: flex-start;
  margin: 0 16px;
  list-style: none;
  padding: 8px 0;
  overflow: auto;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      img {
        height: 18px;
        width: 24px;
      }
    }
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;
const SocialAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0px;
  padding: 4px 8px;
  min-height: 40px;

  border: none;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    background: transparent;
    border: none;
    line-height: 1px;
    font-size: 18px;
    @media (max-width: 768px) {
      span {
        margin-left: 8px;
        font-size: 10px;
      }
    }

    img {
      height: 30px;
      width: 30px;
    }
    span {
    }
  }
`;
const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;
const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticleAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
