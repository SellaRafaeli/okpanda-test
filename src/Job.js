import React, { Component } from 'react';
import './Job.css';

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeJob = this.removeJob.bind(this);
  }

  removeJob() {
    this.props.removeJob(this.props.uuid);
  }

  render() {
    return (
      <div className="Job">
        Msg: {this.props.msg}
        <br/>
        Payload: {this.props.payload}
        <br/>
        <button onClick={this.removeJob}>Remove Me!</button>
      </div>
    );
  }

  frenchify() {
    this.setState({});
  }
}

export default Job;