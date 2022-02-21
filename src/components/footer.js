import logo from '../images.png';
import React from "react";
//import "./header.css";

export default class Footer extends React.Component {
  state = {};

  render() {
    return (
      <footer>
        <div>
          <img className="App-logo" alt="logo" src={logo}/>
        </div>
        <div>
          <a>Ecocity</a>
          <a>Blog</a>
          <a>About me</a>
          <a>Contact</a>
          <a>Privacy policy</a>
        </div>
      </footer>
    );
  }
}