import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackGround />
          <a href=".">
            <Photo />
            <Link>
              Welcome {props.user ? props.user.displayName : "there"}!
            </Link>
          </a>
          <a href="_blanck">
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a href=".">
            <div>
              <span>Connections</span>
              <span>Grow Your Network</span>
            </div>
            <img src="./images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="./images/item-icon.svg" alt="" />
            My Item
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a href=".">
          <span>Groups</span>
        </a>
        <a href=".">
          <span>
            Events
            <img src="./images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a href=".">
          <span>Follow Hashtags</span>
        </a>
        <a href=".">
          <span>Discover More</span>
        </a>
      </CommunityCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: Left;
`;

const ArtCard = styled.div`
  text-align: center;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
  a {
    text-decoration: none;
  }
`;
const CardBackGround = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0px;
`;
const Photo = styled.img`
  box-shadow: none;
  background-image: url("./images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: #fff;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid white;
`;
const AddPhotoText = styled.div`
  color: blue;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;
const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 13px;
        line-height: 1.33;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.div`
  text-align: left;
  border-color: rgba(0, 0, 0, 0.8);
  padding: 12px;
  font-size: 14px;
  display: block;
  &:span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    &:hover {
      color: blue;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      border-top: 1px solid rgba(0, 0, 0, 0.15);
      text-decoration: none;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Leftside);
