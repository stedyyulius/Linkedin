import React, { Component } from 'react';

import './index.css';

import ProfileCard from '../../components/ProfileCard';
import ShareBox from '../../components/ShareBox';
import Timeline from '../../components/Timeline';

class Home extends Component {
  render() {
    return(
      <div className="home">
        <ProfileCard />
        <div>
          <ShareBox />
          <hr />
          <Timeline />
        </div>
      </div>
    )
  }
}

export default Home;
