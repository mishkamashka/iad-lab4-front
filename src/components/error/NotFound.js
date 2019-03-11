import React from "react";
import image from "../../static/img/eg.jpg";
import styled from "styled-components";

const NotFoundPageWrapper = styled.div`
  background: white;
  height: 100vh;
`;

const Message = styled.div`
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
  text-align: center;
`;
const MessageErrorCode = styled.div`
  @media all and (min-width: 1192px) {
    font-size: 14rem;
  }
  @media all and (min-width: 759px) and (max-width: 1192px) {
    font-size: 9rem;
  }
  @media all and (max-width: 759px) {
    font-size: 2rem;
  }
`;
const MessageDescription = styled.div`
  @media all and (min-width: 1192px) {
    font-size: 30px;
  }
  @media all and (min-width: 759px) and (max-width: 1192px) {
    font-size: 20px;
  }
  @media all and (max-width: 759px) {
    font-size: 13px;
  }
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  @media all and (min-width: 1192px) {
    width: 400px;
    height: 420px;
  }
  @media all and (min-width: 759px) and (max-width: 1192px) {
    width: 200px;
    height: 220px;
  }
  @media all and (max-width: 759px) {
    width: 100px;
    height: 100px;
  }
`;
export default class NotFoundPage extends React.Component {
  render() {
    return (
      <NotFoundPageWrapper>
        <Message>
          <MessageErrorCode>ERROR 404</MessageErrorCode>
          <MessageDescription>ooops, something went wrong</MessageDescription>
          <ImageContainer>
            <Image src={image} />
          </ImageContainer>
        </Message>
      </NotFoundPageWrapper>
    );
  }
}
