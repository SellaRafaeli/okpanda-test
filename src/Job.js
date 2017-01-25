import React, { Component } from 'react';
import './Job.css';

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.frenchify = this.frenchify.bind(this);
    this.removeJob = this.removeJob.bind(this);
  }

  removeJob() {
    this.props.removeJob(this.props._id);
  }

  render() {
    return (
      <div className="Job">
        Msg: {this.props.msg}!
        <br/>
        <button onClick={this.frenchify}>Frenchify!</button>
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