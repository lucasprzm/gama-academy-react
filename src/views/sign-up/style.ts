import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8c52e5;
  width: 100%;
  height: 100vh;
  .card {
    display: grid;
    background-color: #f9f9f9;
    max-width: 300px;
    border-radius: 22px;
    padding: 22px;
    h5 {
      font-family: Roboto, sans-serif;
      text-align: center;
      font-size: 22px;
      color: #8c52e5;
    }
    a {
      text-decoration: none;
      text-align: center;
      color: #8c52e5;
      font-family: Roboto, sans-serif;
      margin: 12px 0 0 0;
    }
    form {
      input {
        width: 100%;
        height: 32px;
        text-align: center;
        border-radius: 22px;
        border: 1px solid #e2e2e2;
        margin: 10px 0 0 0;
      }
      input[type="submit"] {
        cursor: pointer;
        border: none;
        background-color: #68de5a;
        padding: 5px;
        border-radius: 12px;
        transition: 0.6s;
        :hover {
          background-color: #8c52e5;
          color: #fff;
        }
      }
    }
  }
`;
