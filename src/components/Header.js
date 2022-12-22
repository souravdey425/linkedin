import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { singnoutAPI } from "../actions";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="./images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="search" />
          </div>
          <SearchIcon>
            <img src="./images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavlistWrap className="active">
            <Navlist>
              <a href=".">
                <img src="./images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </Navlist>
            <Navlist>
              <a href=".">
                <img src="./images/nav-network.svg" alt="" />
                <span>Network</span>
              </a>
            </Navlist>
            <Navlist>
              <a href=".">
                <img src="./images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </Navlist>
            <Navlist>
              <a href=".">
                <img src="./images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </Navlist>
            <Navlist>
              <a href=".">
                <img src="./images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </Navlist>
            <User>
              <a href=" ">
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="./images/user.svg" alt="" />
                )}

                <span>
                  {props.user ? props.user.displayName : "me"}
                  <img src="./images/down-icon.svg" alt="" />
                </span>
              </a>
              <SignOut onClick={() => props.signOut()}>SignOut</SignOut>
            </User>
            <Work>
              <a href=" ">
                <img src="./images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="./images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavlistWrap>
        </Nav>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  width: 100vw;
  padding: 0px 12px;
  top: 0;
  z-index: 100;
  left: 0;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  min-width: 1128px;
  margin: 0 auto;
`;
const Logo = styled.a``;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  margin-left: 6px;
  & > div {
    max-width: 280px;
  }
  input {
    border: none;
    box-shadow: none;
    background-color: #eef3f8;
    color: rgba(0, 0, 0, 0.9);
    border-radius: 2px;
    width: 218px;
    height: 34px;
    padding: 0 8px 0 40px;
    font-weight: 400;
    font-size: 14px;
    border-color: blue;
    vertical-align: text-top;
    line-height: 1.75px;
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  top: 10px;
  left: 2px;
  z-index: 1;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  background: white;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
  }
`;
const NavlistWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  gap: 2em;
  margin-left: 20px;
  margin-right: 40px;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const Navlist = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    max-height: 52px;
    max-width: 80px;
    text-decoration: none;
    span {
      display: flex;

      align-items: center;
      color: rgba(0, 0, 0, 0.6);
    }
    @media (max-width: 768px) {
      max-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled.div`
  position: absolute;
  top: 40px;
  background: white;
  width: 100px;
  height: 40px;
  border-radius: 0 0 5px 5px;
  text-align: center;
  transition-duration: 165ms;
  display: none;
`;
const User = styled(Navlist)`
  display: flex;
  align-items: center;
  gap: -1px;
  margin-top: 2px;
  line-height: 0.02;
  padding: 2px;
  a > img {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const Work = styled(User)`
  border-left: 2px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 768px) {
    display: none;
  }
  a {
    margin-left: 5px;
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(singnoutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
