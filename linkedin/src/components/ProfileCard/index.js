import React, { Component } from 'react';

import './index.css';

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-card">
        <div className="profile-background"></div>
        <img className="profile-picture" src="https://media.licdn.com/dms/image/C5603AQFqH8-QoYdjDQ/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=rnEAsI--sKiN-IqoGliTauM62RVX8q_IHl8tWFkTEzo" alt="profile"/>
        <div className="profile-segment">
          <h4>Christian Hanggra</h4>
          <p>Tech Enthusiaist</p>
        </div>
        <div className="profile-segment">
          <p className="number">80</p>
          <p>Who's viewed your profile</p>
        </div>
        <div className="profile-segment">
          <p className="number">1,133</p>
          <p>Connections</p>
          <b>Manage your Network</b>
        </div>
        <div className="profile-footer">
          <p>Access exclusive tools & insights</p>
          <b><span className="fa fa-square"></span> Free Upgrade to Premium</b>
        </div>
      </div>
    )
  }
}

export default ProfileCard;
