import styled from "styled-components";

export default styled.article`
  font-family: sans-serif;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .brandContainer {
    display: flex;
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 18px;
    }
  }

  img {
    width: 300px;
  }
  p {
    font-size: 32px;
  }
`;
