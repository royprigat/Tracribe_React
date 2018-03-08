import React, { Component } from 'react';
import Logo from './Logo';
import AddRecordForm from './AddRecordForm';
import '../css/Sidenav.css';

function Sidenav(props) {
  return (
    <div className="sidenav">
      <Logo />
      <AddRecordForm />
    </div>
  );
}

export default Sidenav;
