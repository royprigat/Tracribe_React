import React from 'react';
import { Segment, Form, Button, Icon } from 'semantic-ui-react';
import '../css/AddRecordForm.css';

class AddRecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        user: '', 
        pass: '',
        title: '',
        titleError: false, 
        userError: false, 
        passError: false
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetAll = this.resetAll.bind(this);
  }

  validateForm(e) {
    e.preventDefault();
    this.setState({ titleError: false, userError: false, passError: false });
    if (e.target.user.value === '') {
      this.setState({ userError: true });
    } if (e.target.pass.value === '') {
      this.setState({ passError: true });
    } if(e.target.title.value === '') {
      this.setState({ titleError: true});
    }
  }

  handleChange = (e,{ name, value }) => this.setState({ [name]: value });

  resetAll = () => this.setState({
    user: '',
    pass: '',
    title: '',
    titleError: false, 
    userError: false, 
    passError: false
  });

  render() {
    return (
      <Segment padded style={{ width: '220px', height: '330px', margin: '0 auto', marginTop: '30px' }} >
        <Form onSubmit={this.validateForm} style={{ width: '100%', margin: '0 auto'}}>
          <Form.Field>
            <label>Title</label>
            <Form.Input
              fluid
              name="title"
              placeholder="Enter title"
              value={this.state.title}
              onChange={this.handleChange}
              error={this.state.titleError}
            />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <Form.Input 
              fluid
              name="user"
              placeholder="Enter username"
              value={this.state.user}
              onChange={this.handleChange}
              error={this.state.userError}            
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Form.Input 
              fluid
              name="pass"
              placeholder="Enter password"
              value={this.state.pass}
              onChange={this.handleChange}
              error={this.state.passError}  
            />
          </Form.Field>
          <Button type='submit' color='teal' style={{ width: '100px', marginLeft: '10px', marginTop: '15px' }}>Add</Button>
          <Button icon onClick={this.resetAll} style={{ width: '50px', marginLeft: '3px', marginTop: '15px' }}><Icon name="repeat" /></Button>
        </Form>
      </Segment>
    )
 }
}

export default AddRecordForm;

