import React from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import Logo from './Logo';
import '../css/LoginForm.css';

// Set username and password to the app
const username = 'royprigat';
const password = 'blabla';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        username: '', 
        password: '',
        userError: false,
        passError: false,
        userPlaceHold: 'Username',
        passPlaceHold: 'Password'
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm(e) {
    e.preventDefault();
    this.setState({ userError: false, passError: false });
    if (e.target.username.value !== username) {
      this.setState({ username: '', userError: true });
    } else if (e.target.password.value !== password) {
      this.setState({ password: '', passError: true });
    } else {
        this.props.onLogin()
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Logo />
            <Form onSubmit={this.validateForm} size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder={this.state.userPlaceHold}
                  value={this.state.username}
                  onChange={this.handleChange}
                  error={this.state.userError}
                  focus={this.state.userError}
                />
                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder={this.state.passPlaceHold}
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  error={this.state.passError}
                  focus={this.state.passError}
                />

                <Form.Button color="linkedin" fluid size="large" content="submit">Login</Form.Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>);
  }
}

export default LoginForm;

