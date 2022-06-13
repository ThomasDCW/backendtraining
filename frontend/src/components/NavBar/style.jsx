import styled from "styled-components";

export default styled.nav`
  padding: 1em;
  ul {
    display: flex;
    justify-content: space-evenly;
    li {
      border: 3px solid black;
      color: white;
      font-size: 30px;
      font-weight: bold;
      -webkit-text-stroke: 0.8px black;
      background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
      border-radius: 10px;
      padding: 0.6em;
    }
  }
`;
