import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import Record from './Record';
import '../css/Records.css';

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subs: props.data,
    };
  }

  // componentDidMount() {
  //   fetch('http://localhost:9999')
  //     .then(response => response.json())
  //     .then(data => this.setState({ subs: data.message }));
  // }


  render() {
    // const subscriptions = localStorage.getItem('subscriptions');
    return (
      <Grid padded centered className="records">
        <Grid.Column>
          <Card.Group centered>
            <Record sub="Google" />
            <Record sub="Facebook" />
            <Record sub="Amazon" />
            <Record sub="Github" />
            <Record sub="Spotify" />
            <Record sub="SSOL" />
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Records;
