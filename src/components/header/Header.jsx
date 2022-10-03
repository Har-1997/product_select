import logo from './logo.svg';
import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Header</h2>
    </div>
  )
}

export default Header


