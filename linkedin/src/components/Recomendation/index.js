import React, { Component } from 'react';

import './index.css';

class Recomendation extends Component {
  render() {
    return (
      <div className="recomendation-container">
        <h4>Add to your feed</h4>
        <div className="row col-md-12">
          <img className="image-circle" src="https://media.licdn.com/dms/image/C4E03AQFlmLGSxfTBlg/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=lHlPuSETSmFyPEPLBycWtPlZoek8jovjifUnGAuo_d8" alt="linkedin member" />
          <div className="recomendation-name">
            <b>Max Levchin</b>
            <p>Co - Founder & CEO at Affirm, Inc</p>
          </div>
          <button className="btn btn-default follow-button"><span className="fa fa-plus"></span> Follow</button>
        </div>
        <div className="row col-md-12">
          <img className="image-circle" src="https://media.licdn.com/dms/image/C510BAQFU7G33v1PBZw/company-logo_200_200/0?e=1549497600&v=beta&t=KYVBiTBe8LJwielo8dHEOwzeP6Dkaw3jhyZY1MvxDI8" alt="linkedin member" />
          <div className="recomendation-name">
            <b>Shopee</b>
            <p>Company . Internet</p>
          </div>
          <button className="btn btn-default follow-button"><span className="fa fa-plus"></span> Follow</button>
        </div>
        <div className="row col-md-12">
          <img className="image-circle" src="https://img1-327a.kxcdn.com/DataImage.ashx/8813408" alt="linkedin member" />
          <div className="recomendation-name">
            <b>Software Engineering</b>
            <p>Topic</p>
          </div>
          <button className="btn btn-default follow-button"><span className="fa fa-plus"></span> Follow</button>
        </div>
        <a className="row col-md-12" href="/"><b>View All Recomendation</b></a>
      </div>
    )
  }
}

export default Recomendation;
