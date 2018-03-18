import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import Sidenav from './components/Sidenav';
import Records from './components/Records';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      data: JSON.parse(localStorage.getItem('subscriptions')) 
    };
  }

  onLogin = () => this.setState({ loggedIn: true });
  onSubmitRecord = () => null;

  render() {
    const isLoggedIn = this.state.loggedIn;
    return (
      <div className="container">
        {true ? (
          <div className="main">
            <Sidenav />
            <Records data={this.state.data}/>
          </div>
          ) : (
            <LoginForm onLogin={this.onLogin}/>
      )}
      </div>
    );
  }
}

export default App;
