import React, { Component } from 'react';
import './index.css';

import ShowMore from '../../components/ShowMore';

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="profile-container">
          <div className="profile-upper"></div>
          <img className="profile-image" src="https://media.licdn.com/dms/image/C5603AQELcNiSd4iakA/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=C_RUBIi1Q9S-FXeIVfEFAklaC_hRDLhl5nRCXk1TLpA" alt="profile-pic"/>
          <br />
          <div className="profile-lower col-md-8">
            <h4>Hantze Sudarma</h4>
            <h5>Laboratory Coordinator</h5>
            <h6>Indonesia</h6>
            <div className="profile-navigations">
              <button className="btn btn-primary">Connect</button>
              <button className="btn btn-default">InMail</button>
              <button className="btn btn-default">More...</button>
            </div>
          </div>
          <div className="profile-lower col-md-4">
            <div className="profile-education">
              <span className="fa fa-university"></span>
              <p>Binus International University</p>
            </div>
            <div className="profile-education">
              <span className="fa fa-university"></span>
              <p>Universitas Bina Nusantara (Binus)</p>
            </div>
            <div className="profile-education">
              <span className="fa fa-address-book-o"></span>
              <p>See Contact Info</p>
            </div>
            <div className="profile-education">
              <span className="fa fa-users"></span>
              <p>500+ Connections</p>
            </div>
          </div>
          <div className="profile-description col-md-12">
            <p>
              An experienced programmer in various fields of computer science including game development, web
              application, computational intelligence multimedia application, ect. A fast learner who can quickly
              adapt to the new concepts and technology. Have the ability to design a good system architecture.
            </p>
          </div>
          <ShowMore />
        </div>
        <div className="profile-highlights col-md-12">
          <h5>Highlights</h5>
          <div className="col-md-6">
            <div className="circle-container">
              <img className="profile-small-pic1" src="https://media.licdn.com/dms/image/C4E03AQHuIxwXZ_c_vA/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=D3Sbz8UWYewznl_c8jak90AlgzLim8davPPRjVn37fo" alt="p" />
              <img className="profile-small-pic2" src="https://media.licdn.com/dms/image/C4D03AQEopqkMledH9g/profile-displayphoto-shrink_100_100/0?e=1547078400&v=beta&t=tuDf_ByCZ3B3bzLdT0aGOvW4l6Zo_MAkWZc2Vbqn_Jo" alt="p" />
            </div>
            <b>85 Mutual Connections</b>
            <p>You and Hantze both know Wenas Agussetiawan, Achmad Zaky, and 83 others</p>
          </div>
          <div className="col-md-6">
            <div className="circle-container">
            <span className="fa fa-comments"></span>
          </div>
            <b>Reach out to Hantze for...</b>
            <p>Joining a nonprofit</p>
          </div>
          <ShowMore />
        </div>
      </div>
    )
  }
}

export default Profile;
