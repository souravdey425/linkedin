import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import { signInAPI } from '../actions';
import { Navigate } from 'react-router-dom';
// yarn add styled-components
// yarn add react-router-dom 


const Login = (props) => {
  return (
    <Container>
    {
      props.user &&
      <Navigate to='/home'/>
    }
        <Nav>
        
            <a href="/"><img src="/images/login-logo.svg" alt="" /></a>
            <div><Join>Join now</Join>
            <SignIn>Sign In</SignIn>
            </div>

        </Nav>
        <section>
          <Hero>
            <h1>Welocome Your Professional community</h1>
            <img src="./images/login-hero.svg" alt="" />
          </Hero>
          <Footer>
            <Google onClick={()=> props.SignIn()}>
              <img src="./images/google.svg" alt="" />
               Sign In With Google
            </Google>
          </Footer>
        </section>
        
    </Container>
  )
}
const Container=styled.div`
 padding:0px;
`;
const Nav=styled.div`
max-width:1120px;
margin:auto;
padding:12px 0 16px;
display:flex;
align-items:center;
position: relative;
justify-content:space-between;
flex-wrap:nowrap;
& >a{
    width:135px;
    height:34px;
    @media (max-width: 768px){
      padding: 0px 5px;
      
    }
}
`;
const Join=styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0,0,0,0.6);
  margin-right: 21px;
  &:hover{
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    text-decoration: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;
const SignIn=styled.a`
 color:blue;
 box-shadow: inset 0 0 0 1px blue;
 border-radius: 12px;
 padding: 8px 10px;
 align-items: center;
 transition-duration: 167ms;
 background-color: rgba(0,0,0,0);
 font-size: 16ox;
 font-weight: 600;
 line-height: 40px;
 &:hover{
  cursor: pointer;
  background-color: rgba(112,181,249,0.15);
  text-decoration: none;
 }
 
`;
const Hero=styled.div`
 width: 100%;
 margin-top: 24px;
 
 h1{
  display: flex;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 55%;
  padding-bottom: 0;
  line-height: 70px;
  font-weight: 200;
  font-size: 56px;
  color: blue;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 20px;
    line-height: 2px;
    width: 100%;
  }

 }
 img{
  z-index: -1;
  height: 670px;
  width: 670px;
  position: absolute;
 top: 84px;
 left: 850px;
  @media (max-width:768px) {
    top: 250px;
    width: initial;
    position: initial;
    height: initial;
    padding-top:28px;
    
  }
 }
`;
const Footer=styled.div`
 padding-top: 100px;
 width: 408px;
 
 
 @media (max-width:768px){
  padding: 30px;
  
 }

`;
const Google=styled.button`
display: flex;
gap: 5px;
justify-content: center;
align-items: center;
width: 100%;
height: 56px;
vertical-align: middle;
font-size: 24px;
border-radius: 42px;
color: rgba(0,0,0,0.6);
background-color: #fff;
z-index: 0;
box-shadow: inset 0 0 0 1px rgb(0 0 0/60%),inset 0 0 0 2px rgb(0 0 0/0%),inset 0 0 0 1px rgb(0 0 0 /0);
transition-duration: 167ms;
cursor: pointer;
&:hover{
 background-color: rgba(207,207,207,0.25);
 color: rgba(0,0,0,0.8);
}
`;
const mapStateToProps=(state)=>{
  return{
    user:state.userState.user,
  };
};
const mapDispatchToProps=(dispatch)=>({
  SignIn:()=>dispatch(signInAPI()),
});



export default connect(mapStateToProps,mapDispatchToProps)(Login);

