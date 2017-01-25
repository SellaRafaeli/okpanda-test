import React, { Component } from 'react';
import Topic from './Topic';
import JobsList from './JobsList';
import './TopicsList.css';

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
    var jobs = [name+'-job']
    this.setState({selectedTopic: name, jobs: jobs})
  }

  addJob(name) {
    this.setState({ jobs: [...this.state.jobs, name] });
  }

  removeJob(removeName) {
    const filteredJobs = this.state.jobs.filter(name => {
      return name !== removeName;
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
        {this.state.selectedTopic}
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
