import React, { Component } from 'react';
import './JobAdder.css';

class JobAdder extends Component {
  constructor(props) {
    super(props);
    this.state          = { jobName: '' };
    this.handleUpdate   = this.handleUpdate.bind(this);
    this.addJob         = this.addJob.bind(this);
  }

  addJob() {
    this.props.addJob(this.state.jobName);
    this.setState({ jobName: '' });
  }

  handleUpdate(event) {
    this.setState({ jobName: event.target.value });
  }

  render() {
    return (
      <div className="JobAdder">
        <input
          type="text"
          onChange={this.handleUpdate}
          value={this.state.jobName}
        />
        &nbsp;&nbsp;
        <button onClick={this.addJob}>Add</button>
      </div>
    );
  }
}

export default JobAdder;