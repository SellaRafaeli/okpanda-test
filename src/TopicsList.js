import React, { Component } from 'react';
import Topic from './Topic';
import JobsList from './JobsList';
import './TopicsList.css';
import $ from 'jquery';

class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.state  = { 
      topics: ['topic1', 'topic2', 'topic3'], 
      selectedTopic: '',
      jobs: []
    };
    this.selectTopic = this.selectTopic.bind(this);
    this.addJob      = this.addJob.bind(this);
    this.removeJob   = this.removeJob.bind(this);
  }

  selectTopic(name) {
    var that = this;
    $.get('/api/jobs?topic='+name).then( res => { 
      that.setState({selectedTopic: name, jobs: res.jobs});
    });
  }

  addJob(name) {
    var that = this;
    $.get('/api/addJobs?topic='+name).then( res => { 
      this.setState({ jobs: [...that.state.jobs, name] });
    });
  }

  removeJob(removeId) {
    const filteredJobs = this.state.jobs.filter(job => {
      return job._id !== removeId;
    });
    this.setState({ jobs: filteredJobs });
  }

  renderTopics() {
    return this.state.topics.map(name => (
      <Topic
        key={name}
        name={name}
        select={this.selectTopic}
      />
    ));
  }

  render() {
    return (
      <div>
        <div className="TopicsList">
          <b>selected topic: {this.state.selectedTopic} </b>
          {this.renderTopics()}          
        </div>
        <JobsList topic={this.state.selectedTopic} 
                  jobs={this.state.jobs}
                  addJob={this.addJob}
                  removeJob={this.removeJob}
        />
      </div>
    );
  }
}

export default TopicsList;
