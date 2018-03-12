import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../css/Record.css';

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  render() {
    return (
      <Segment className="record">
        <p> {this.props.sub} </p>
      </Segment>
    );
  }
}

export default Record;
