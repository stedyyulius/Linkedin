import React, { Component } from 'react';

import './index.css';

import ProfileCard from '../../components/ProfileCard';
import ShareBox from '../../components/ShareBox';
import Timeline from '../../components/Timeline';
import Recomendation from '../../components/Recomendation';

class Home extends Component {
  render() {
    return(
      <div className="home">
        <div className="col-md-3 col-md-offset-1">
          <ProfileCard />
        </div>
        <div className="col-md-5">
          <ShareBox />
          <hr />
          <Timeline />
        </div>
        <div className="col-md-4">
          <Recomendation />
        </div>
      </div>
    )
  }
}

export default Home;
