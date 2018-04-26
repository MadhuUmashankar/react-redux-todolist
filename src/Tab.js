import React, { Component } from 'react';

class Tab extends Component {
  render() {
    return (
      <div className="menu">
      <ul className="task-filters">

          <li><a href="/">View All</a></li>
          <li><a href="/?filter=active">Active</a></li>
          <li><a href="/?filter=completed">Completed</a></li>
          </ul>
      </div>
    );
  }
}

export default Tab;
