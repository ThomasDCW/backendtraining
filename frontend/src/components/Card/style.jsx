import styled from "styled-components";

export default styled.article`
  font-family: sans-serif;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2vh;
  .brandContainer {
    padding: 1rem;
    font-weight: bold;
    font-size: 20px;
  }
  img {
    height: 250px;
  }
  p {
    font-size: 30px;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
`;
