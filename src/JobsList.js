import React, { Component } from 'react';
import Job from './Job';
import './JobsList.css';
import JobAdder from './JobAdder';

class JobsList extends Component {
  constructor(props) {
    super(props);
    //this.state = { jobs: this.props.jobs, topic: this.props.topic };
    this.addJob = this.addJob.bind(this);
    this.removeJob = this.removeJob.bind(this);
  }

  addJob(newName) {
    this.props.addJob(newName)
  }

  removeJob(_id) {
    this.props.removeJob(_id);
  }

  renderJobs() {
    console.log('rendering jobs ',this.props.jobs)
    return this.props.jobs.map(job => (
      <Job
        key={job._id}
        _id={job._id}
        msg={job.data.msg}
        removeJob={this.removeJob}
      />
    ));
  }

  renderTopicJobs() {
    return (
      <div className="JobsList">
        <h2>{this.props.topic} Jobs</h2>
        <JobAdder addJob={this.addJob}/>
        {this.renderJobs()}
      </div>
    )
  }

  renderNoTopic() {
    return (<div className="JobsList">No Topic Selected.</div>);
  }

  render() {
    if (this.props.topic) { 
      return this.renderTopicJobs();
    }
    else { 
      return this.renderNoTopic();
    }
  }
}
export default JobsList;
