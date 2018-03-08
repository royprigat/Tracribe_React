import React, { Component } from 'react';
import '../css/Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:9999')
      .then(response => response.json())
      .then(data => this.setState({ message: data.message }));
  }


  render() {
    return (
      <div className="content">
        <p> {this.state.message} </p>
      </div>
    );
  }
}

export default Content;
