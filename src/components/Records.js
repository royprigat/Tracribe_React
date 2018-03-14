import React, { Component } from 'react';
import Record from './Record';
import '../css/Records.css';

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subs: [],
    };
  }

  // componentDidMount() {
  //   fetch('http://localhost:9999')
  //     .then(response => response.json())
  //     .then(data => this.setState({ subs: data.message }));
  // }


  render() {
    // const subscriptions = localStorage.getItem('subscriptions');
    const cards = ['Google', 'Facebook'];
    return (
      <div className="records">
        <Record sub="Roy" />
      </div>
    );
  }
}

export default Records;
