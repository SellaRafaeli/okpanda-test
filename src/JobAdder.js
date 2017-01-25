import React, { Component } from 'react';
import './JobAdder.css';

class JobAdder extends Component {
  constructor(props) {
    super(props);
    this.state          = { msg: '', payload: ''};
    this.updateMsg      = this.updateMsg.bind(this);
    this.updatePayload  = this.updatePayload.bind(this);
    this.addJob         = this.addJob.bind(this);
  }

  addJob() {
    this.props.addJob(this.state.msg, this.state.payload);
    this.setState({ msg: '', payload: '' });
  }

  updateMsg(event) {
    this.setState({ msg: event.target.value });
  }

  updatePayload(event) {
    this.setState({ payload: event.target.value });
  }

  render() {
    return (
      <div className="JobAdder">
        <b>Add Job: </b>
        <input placeholder='Message' type="text" onChange={this.updateMsg} value={this.state.msg} />
        <input placeholder='Payload' type="text" onChange={this.updatePayload} value={this.state.payload} />
        &nbsp;&nbsp;
        <button onClick={this.addJob}>Add</button>
      </div>
    );
  }
}

export default JobAdder;