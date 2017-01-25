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
    this.props.removeJob(this.props.name);
  }

  render() {
    return (
      <div className="Job">
        Job Name: {this.props.name}!
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