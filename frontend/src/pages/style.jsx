import styled from "styled-components";

export default styled.form`
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  margin-top: 4vh;
  margin-left: 35vw;
  margin-right: 35vw;
  .textfield {
    width: 70%;
    height: 3em;
    margin: 2vh;
    border: 3px #575151 solid;
    border-radius: 8px;
    ::placeholder {
      font-size: 1em;
      color: #413737;
    }
  }
  .textfield:focus {
    transition: 0.2s;
    font-size: 1rem;
    font-weight: 900;
  }
  .submit {
    margin: 4vh;
    height: 2em;
    width: 200px;
    background: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: white;
    font-size: 24px;
    font-weight: bold;
    -webkit-text-stroke: 0.8px black;
    border: 3px solid black;
    border-radius: 8px;
    cursor: pointer;
  }
  .submit:hover {
    background: linear-gradient(to right, #ff2a6a 0%, #ffda0a 100%);
    box-shadow: none;
  }
`;
