import React, { Component } from 'react';

import './index.css';

class Viewed extends Component {
  render() {
    return (
      <div>
        <p>People also Viewed</p>
        <div className="col-md-12 row">
          <img className="image-circle" src="https://media.licdn.com/dms/image/C5603AQE0gZXs0C1I2Q/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=CJyM_jLqg8aJ2XItcxgTPXdAdQIeV5gHSPxvAVPFYlg" alt="profile-pic" />
          <div>
            <h5>Rinto Priambodo</h5>
            <p>Software Development Manager</p>
          </div>
        </div>
        <div className="col-md-12 row">
          <img className="image-circle" src="https://media.licdn.com/dms/image/C5103AQE2KJqK7BRfCg/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=IcGoM3ITqLS1yp04VvitXMR0yZuiRRKM_akpZW_SrmQ" alt="profile-pic" />
          <div>
            <h5>Elysia Chen</h5>
            <p>Computer Science Lecturer at Bina Nusantara University</p>
          </div>
        </div>
        <div className="col-md-12 row">
          <img className="image-circle" src="https://media.licdn.com/dms/image/C4E03AQF9iyXrT4qihQ/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=ouNv7c2pAVshNvxQCa2pK76NlxFF-sLrwHvASj59aeI" alt="profile-pic" />
          <div>
            <h5>Alvin Tanjaya</h5>
            <p>Technology Specialist and Co-Founder of PT.Jakmall Digital Niaga (JAKMALL.COM)</p>
          </div>
        </div>
        <div className="col-md-12 row">
          <img className="image-circle" src="https://media.licdn.com/dms/image/C5603AQFiQTUGSUMH6A/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=S1n6azVqG7URdWauVpjhU1LTx5M75I7Cl-13mXVk250" alt="profile-pic" />
          <div>
            <h5>Derwin Suhartono</h5>
            <p>Head of Computer Science Program at Bina Nusantara University</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Viewed;
