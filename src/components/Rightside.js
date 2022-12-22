import React from 'react'
import styled from 'styled-components'

const Rightside = () => {
  return (
    <Container>
      <FollowCard>
      <Title>
        <h2>Add to your feed</h2>
        <img src="./images/feed-icon.svg" alt="" />
      </Title>
      <FeedList>
        <li>
          <a href=".">
            <Avatar/>
          </a>
          <div>
            <span>#Linkedin</span>
            <button>Follow</button>
          </div>
        </li>
        <li>
          <a href=".">
            <Avatar/>
          </a>
          <div>
            <span>#Video</span>
            <button>Follow</button>
          </div>
        </li>
      </FeedList>
      <Recommandation>
        View all recommendation
        <img src="./images/right-icon.svg" alt="" />
      </Recommandation>
      </FollowCard>
      <Bannercard>
        <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />
      </Bannercard>
    </Container>
  )
}
const Container=styled.div`
grid-area: Right;
`;
const FollowCard=styled.div`
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
const Title=styled.div`
display: inline-flex;
align-items: center;
justify-content: space-between;
width: 100%;
font-size: 16px;
color: rgba(0,0,0,0.6);
`;
const FeedList=styled.div`
margin-top: 16px;
li{
  display: flex;
  align-items: center;
  margin: 12px 0;
  position: relative;
  font-size: 14px;
  &>div{
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  button{
    background-color: transparent;
    color: rgba(0,0,0,0.6);
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
    padding: 16px;
    align-items: center;
    border-radius: 16px;
    max-height: 32px;
    max-width: 480px;
    text-align: center;
    box-sizing: border-box;
    justify-content: center;
    font-weight: 600;
    display: inline-flex;
    outline: none;
  }
}
`;
const Avatar=styled.div`
background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width: 48px;
height: 48px;
margin-left: 8px;
`;
const Recommandation=styled.a`
color:blue;
display: flex;
align-items: center;
font-size: 14px;
`;
const Bannercard=styled.div`
width: 100%;
height: 100%;
`;

export default Rightside