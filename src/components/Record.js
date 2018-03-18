import React, { Component } from 'react';
import { Grid, Card, Label, Image, Button, Icon } from 'semantic-ui-react';
import '../css/Record.css';
import drawing from '../img/drawing.svg';

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  render() {
    return (
      <Card raised className="record">
        <Card.Content>
          <Card.Header>
            {this.props.sub}
          </Card.Header>
          <Card.Meta>
                  Joined on
          </Card.Meta>
          <Card.Description>
            <Label.Group>
              <Label as="a">
                <Icon name="user" />
                  username
              </Label>
              <Label as="a">
                <Icon name="key" />
                  password
              </Label>
            </Label.Group>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Record;
