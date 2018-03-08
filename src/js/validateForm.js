function validateForm(e, username, password) {
  this.setState({ userError: false, passError: false });
  if (e.target.username.value !== username) {
    this.setState({ username: '', userError: true });
  } else if (e.target.password.value !== password) {
    this.setState({ password: '', passError: true });
  } else {
    this.props.onLogin();
  }
}

export default validateForm;
