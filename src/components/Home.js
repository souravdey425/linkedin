import React from "react";
import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <Section>
        <h5>
          <a href=".">Hiring In a Hurry?--</a>
        </h5>
        <p>Find talented pros in a work Upwork and keep businees moving.</p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  padding: 56px;
  max-width: 100%;
`;
const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    font-size: 14px;
  }
  a {
    font-weight: 700;
  }
  p {
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 64px;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "Left  Main Right";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
