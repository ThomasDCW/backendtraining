import styled from "styled-components";

export default styled.article`
  font-family: sans-serif;
  border: 2px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 4vh;
  .brandContainer {
    margin: 1em;
    h1 {
      font-size: 24px;
      font-weight: bold;
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
    font-weight: bold;
  }
`;
