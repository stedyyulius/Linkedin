import React, { Component } from 'react';

import './index.css';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-container">
        <div className="timeline-top">
           <img className="timeline-picture" src="https://media.licdn.com/dms/image/C4E03AQHuIxwXZ_c_vA/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=D3Sbz8UWYewznl_c8jak90AlgzLim8davPPRjVn37fo" alt="profile-pic"/>
           <div className="timeline-detail">
              <b>Wirjadi Lorens</b>
              <p>Founder at OKTAGON</p>
              <p>1d</p>
           </div>
         </div>
         <div className="timeline-body">
           <div>
             <img className="timeline-content-pic" src="https://daily.oktagon.co.id/wp-content/uploads/2017/12/Artificial-Intelligence-1.jpg?412b0e" alt="timeline-content-pic" />
             <div className="timeline-content-detail">
               <b>Artificial Intelligence (AI), dari Teknologi Abstrak Hingga jadi 'Otak' Bisnis </b>
               <p>daily.oktagon.co.id</p>
             </div>
           </div>
         </div>
         <div className="timeline-like">
           <p>1 Like</p>
         </div>
         <div className="timeline-footer">
           <div className="timeline-footer-navigation">
             <span className="fa fa-thumbs-up"></span>
             <p>Like</p>
           </div>
           <div className="timeline-footer-navigation">
             <span className="fa fa-comment"></span>
             <p>Comment</p>
           </div>
           <div className="timeline-footer-navigation">
             <span className="fa fa-share"></span>
             <p>Share</p>
           </div>
         </div>
      </div>
    )
  }
}

export default Timeline;
