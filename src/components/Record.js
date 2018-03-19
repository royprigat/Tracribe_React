import React from 'react';
import { Grid, Card, Label, Button, Icon } from 'semantic-ui-react';
import '../css/Record.css';

function Record(props) {
  return (
    <Card raised className="record">
      <Card.Content>
        <Button circular compact size="mini" inverted color="red" icon="delete" floated="right" />
        <Card.Header>
          {props.sub.title}
        </Card.Header>
        <Card.Meta>
          Joined on {props.sub.date}
        </Card.Meta>
        <Card.Description>
          <Label.Group>
            <Label as="a">
              <Icon name="user" />
              {props.sub.uname}
            </Label>
            <Label as="a">
              <Icon name="key" />
              {props.sub.pass}
            </Label>
          </Label.Group>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default Record;
