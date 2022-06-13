import styled from "styled-components";

export default styled.article`
  font-family: sans-serif;
  color: rgba(90, 82, 82, 0.986);
  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 4vh;
  .brandContainer {
    margin: 1em;
    h1 {
      font-weight: bold;
    }
  }

  img {
    width: 300px;
  }
  p {
    padding: 1em;
    font-size: 24px;
    font-weight: bold;
  }
`;
