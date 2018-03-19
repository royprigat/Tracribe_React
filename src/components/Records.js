import React from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';
import Record from './Record';
import '../css/Records.css';

function Records(props) {
  // componentDidMount() {
  //   fetch('http://localhost:9999')
  //     .then(response => response.json())
  //     .then(data => this.setState({ subs: data.message }));
  // }

  const subscriptions = props.data;

  return (
    <Grid padded centered className="records">
      <Grid.Column>
        <Card.Group centered>
          { subscriptions ?
            (subscriptions.map((item, index) => <Record key={index} sub={item} onDelete={props.onDelete} />)) :
            (<Icon style={{ paddingTop: '20px' }} color="teal" size="large" name="smile" />)}
        </Card.Group>
      </Grid.Column>
    </Grid>
  );
}


export default Records;
