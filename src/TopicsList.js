import React, { Component } from 'react';
import Topic from './Topic';
import JobsList from './JobsList';
import './TopicsList.css';
import $ from 'jquery';

class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.state  = { 
      topics: ['Students', 'Teachers', 'Admin', 'Advertising'], 
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

  addJob(msg, payload) {
    var topic = this.state.selectedTopic;
    var qs    = `topic=${topic}&msg=${msg}&payload=${payload}`;
    var that  = this;
    $.get('/api/addJob?'+qs).then( res => { 
      that.setState({ jobs: [...that.state.jobs, res] });
      console.log('jobs are now ',that.state.jobs)
    });
  }

  removeJob(removeId) {
    var that = this;
    $.get('/api/deleteJob?uuid='+removeId).then(()=> {
      const filteredJobs = that.state.jobs.filter(job => {
        return job.data.uuid !== removeId;
      });
      that.setState({jobs: filteredJobs});
    });
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