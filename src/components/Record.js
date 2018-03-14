import React, { Component } from 'react';
import { Grid, Card, Segment, Item, Image, Button } from 'semantic-ui-react';
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
      <Grid padded centered columns={1}>
        <Grid.Column>
          <Card.Group>
            <Card centered className="record">
              <Card.Content>
                <Image floated="right" size="mini" src={drawing} />
                <Card.Header>
                  Title
                </Card.Header>
                <Card.Meta>
                  Added on
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="red">Delete</Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Record;
