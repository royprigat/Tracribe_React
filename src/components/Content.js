import React, { Component } from 'react';
import Record from './Record';
import '../css/Content.css';

class Content extends Component {
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
    const subscriptions = localStorage.getItem('subscriptions');
    return (
      <div className="content">
        <Record sub="Roy" />
      </div>
    );
  }
}

export default Content;
