import React, { Component } from 'react';

class Topic extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
  }

  select() {
    this.props.select(this.props.name);
  }

  render() {
    return (
      <div className="Topic">
        <button onClick={this.select}>{this.props.name}</button>
      </div>
    );
  }
}

export default Topic;