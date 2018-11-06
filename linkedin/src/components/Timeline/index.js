import React, { Component } from 'react';

import './index.css';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-container">
        <div className="timeline-top">
          <img className="timeline-picture" src="https://media.licdn.com/dms/image/C4E03AQHuIxwXZ_c_vA/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=D3Sbz8UWYewznl_c8jak90AlgzLim8davPPRjVn37fo" alt="profile-pic"/>
          <b>Wirjadi Lorens</b>
          <p>Founder at OKTAGON</p>
          <p>1d</p>
        </div>
      </div>
    )
  }
}

export default Timeline;
