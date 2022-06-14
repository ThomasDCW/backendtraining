import styled from "styled-components";

export default styled.nav`
  padding: 1em;

  ul {
    display: flex;
    justify-content: space-evenly;

    a {
      text-decoration: none;
    }
    li {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border: 3px solid black;
      color: white;
      font-size: 30px;
      font-weight: bold;
      -webkit-text-stroke: 0.8px black;
      background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
      border-radius: 10px;
      padding: 0.6em;
    }
    li:hover {
      background: linear-gradient(to right, #ff2a6a 0%, #ffda0a 100%);
      box-shadow: none;
    }
  }
`;
