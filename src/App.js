import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import Sidenav from './components/Sidenav';
import Records from './components/Records';
import { saveSubscription } from './js/coreBackend';
import { deleteSubscription } from './js/coreBackend';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      data: JSON.parse(localStorage.getItem('subscriptions')) 
    };

    this.onLogin = this.onLogin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onLogin = () => this.setState({ loggedIn: true });
  onSubmit = (e) => {
    saveSubscription(e);
    this.setState({ data: JSON.parse(localStorage.getItem('subscriptions')) });
  }
  onDelete = (e) => {
    deleteSubscription(e);
    this.setState({ data: JSON.parse(localStorage.getItem('subscriptions')) });
  }

  render() {
    const isLoggedIn = this.state.loggedIn;
    const data = this.state.data;
    return (
      <div className="container">
        {isLoggedIn ? (
          <div className="main">
            <Sidenav onSubmit={this.onSubmit}/>
            <Records data={data} onDelete={this.onDelete}/>
          </div>
          ) : (
            <LoginForm onLogin={this.onLogin}/>
      )}
      </div>
    );
  }
}

export default App;
