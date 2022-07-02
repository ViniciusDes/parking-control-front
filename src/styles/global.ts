import styled, { createGlobalStyle, css, keyframes } from "styled-components";

export default createGlobalStyle`

.container-main, body, input, button  {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 14px;  
  height: 100%;
}


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  #clear_input {
    position: relative;
    float: right;
    height: 19px;
    width: 19px;
    font-weight:bold;
    font-size:14px;
    margin-top: -25px;
    right: 5px;
    border-radius: 20px;
    background: #E8E9EE;
    color: white;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
  #clear_input:hover {
    background: #ccc;
  }


  .btn1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0 0;
    margin-top: 1px;
    padding: 0 12px;
    height: 32px;
    /* background: #61098a; */
    background: #543676;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 6px;
    font-size: 14px;
    transition: background 0.2s;

     
  }

  .btn3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-top: 1px;
  padding: 0 10px 0 10px;
  height: 32px;
  background: #e42a3c;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  transition: background 0.2s;

   
  }

.btn-success {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-top: 1px;
    padding: 0 10px 0 10px;
    height: 32px;
    background: #02C3A7;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    transition: 0.5s;

    
  }

 

form label {
  color: #6b6565;
  font-weight: 500;
  font-size: 13px;
}

.grid-button {
  background-color: transparent;
  border: none;
  outline: 0;
  padding: 0;
  margin-right: 14px;
}

.grid-button:last-child {
  margin-right: 0;
}

.grid-button i {
  color: #61098a;
}  
 

 
`;
