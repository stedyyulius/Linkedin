import React, { Component } from 'react';

import './index.css';

class ShareBox extends Component {
  render() {
    return (
      <div className="sharebox-container">
        <textarea className="sharebox-input" placeholder="Share an article, photo, video or idea" />
        <div className="sharebox-navigations">
          <button className="sharebox-button"><span className="fa fa-edit"></span> Write an article</button>
          <button className="sharebox-button"><span className="fa fa-camera"></span> Images</button>
          <button className="sharebox-button"><span className="fa fa-video-camera"></span> Video</button>
          <button className="btn btn-primary post-button">Post</button>
        </div>
      </div>
    )
  }
}

export default ShareBox;
