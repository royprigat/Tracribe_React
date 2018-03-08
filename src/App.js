import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import Sidenav from './components/Sidenav';
import Content from './components/Content';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  onLogin = () => this.setState({ loggedIn: true });

  render() {
    const isLoggedIn = this.state.loggedIn;
    return (
      <div className="container">
        {true ? (
          <div>
            <Sidenav />
            <Content />
          </div>
          ) : (
            <LoginForm onLogin={this.onLogin}/>
      )}

      </div>
    );
  }
}

export default App;
