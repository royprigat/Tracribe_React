import React, { Component } from 'react';
import Logo from './Logo';
import '../css/Sidenav.css';

function Sidenav(props) {
  return (
    <div className="sidenav">
      <Logo />
    </div>
  );
}

export default Sidenav;
