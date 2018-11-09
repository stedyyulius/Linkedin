import React, { Component } from 'react';
import './index.css';

import Viewed from '../../components/Viewed';
import ShowMore from '../../components/ShowMore';

class Profile extends Component {
  render() {
    return (
      <div className="profile-page">
        <div className="col-md-8">
          <div className="profile-container row">
            <div className="profile-upper"></div>
            <img className="profile-image" src="https://media.licdn.com/dms/image/C5603AQELcNiSd4iakA/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=C_RUBIi1Q9S-FXeIVfEFAklaC_hRDLhl5nRCXk1TLpA" alt="profile-pic"/>
            <br />
            <div className="profile-lower col-md-8">
              <h4>Hantze Sudarma</h4>
              <h4>Laboratory Coordinator</h4>
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
            <div className="profile-description">
              <p className="desc">
                An experienced programmer in various fields of computer science including game development, web
                application, computational intelligence multimedia application, ect. A fast learner who can quickly
                adapt to the new concepts and technology. Have the ability to design a good system architecture.
              </p>
              <ShowMore />
            </div>
          </div>
          <div className="card row">
            <h4 className="card-title">Highlights</h4>
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
          <div className="card row">
            <div className="card-title">
              <h4>Hantze's Activity</h4>
              <p>1,151 followers</p>
            </div>
            <div className="col-md-12">
              <img className="image-circle" src="https://media.licdn.com/dms/image/C5603AQELcNiSd4iakA/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=C_RUBIi1Q9S-FXeIVfEFAklaC_hRDLhl5nRCXk1TLpA" alt="hantze" />
              <p>
                I'm looking for startup or IT company for short intern program in June until August 2018 in Jakarta. Please PM me if you have some space for my students on that period. Thanks!
              </p>
              <p>Hantze shared this</p>
            </div>
            <ShowMore />
          </div>
          <div className="card row">
            <h4 className="card-title">Experience</h4>
            <div className="col-md-12 row">
              <div className="col-md-2 row">
                <img className="work-place" src="http://www.clker.com/cliparts/2/a/y/8/k/a/government-building.svg" alt="work" />
              </div>
              <div className="col-md-8">
                <h4>Lab Coordinator</h4>
                <h6>Binus International University</h6>
                <p>Sep 2015 - Present . 2 yrs 9 mos FX Mall</p>
                <p>Laboratory coordinator at binus International</p>
                <p>Laboratory coordinator at binus International</p>
                <p>Responsibility:</p>
                <p>- Manage all of lab's activity in Binus International University</p>
                <p>- Assign Teaching Assistant (TA) to help lecturer</p>
                <p>- Create training and event for the TA</p>
                <p>- Prepare student to compete in the various competition</p>
                <p>- Create, update and renew the Syllabus Course in Computer Science Binus Internation University</p>
              </div>
            </div>
            <p className="show-experience">Show More <span className="fa fa-sort-desc"></span></p>
          </div>
          <div className="card row">
            <h4 className="card-title">Education</h4>
            <div className="col-md-12 row">
              <div className="col-md-2 row">
                <img className="work-place" src="http://www.binus.edu/wp-content/uploads/2016/11/logoBINUS.png" alt="work" />
              </div>
              <div className="col-md-8">
                <h4>Universitas Bina Nusantara</h4>
                <p>Magister Teknik Information (MTI), Computer Science 3.5</p>
                <p>2011 - 2013</p>
                <p>
                  Activities and Societis: Artificial Inteligence, Database System, System Engineering,
                  Disaster recovery Management, Network System
                </p>
              </div>
            </div>
            <hr className="col-md-12" />
            <div className="col-md-12 row">
              <div className="col-md-2 row">
                <img className="work-place" src="http://www.binus.edu/wp-content/uploads/2016/11/logoBINUS.png" alt="work" />
              </div>
              <div className="col-md-8">
                <h4>Universitas Bina Nusantara</h4>
                <p>Bachelor's degree, Information Technology 3.5</p>
                <p>2007 - 2011</p>
                <p>
                  Activites and Societies: Artifical Inteligence, Database System, System Engineering, Disaster Recovery Management, Network System
                </p>
                <p>Learn how to be a programer, system analyst and project manager</p>
              </div>
            </div>
          </div>
          <div className="card row">
            <h4 className="card-title">Volunteer Experience</h4>
            <div className="col-md-12 row">
              <div className="col-md-2 row">
                <img className="work-place" src="http://www.clker.com/cliparts/2/a/y/8/k/a/government-building.svg" alt="work" />
              </div>
              <div className="col-md-8">
                <h4>Lecturer</h4>
                <p>PT. Lautan Luas</p>
                <p>Jun 2013 - Jul 2013 . 2 mos</p>
              </div>
            </div>
          </div>
          <div className="card row">
            <h4 className="card-title">Accomplishments</h4>
            <div className="col-md-12 row">
              <div className="col-md-2 row">
                <p className="accomplishment-amount">6</p>
              </div>
              <div className="col-md-8">
                <h4 className="accomplishment-title">Courses</h4>
                <p>Algorithm and Programming . Database System . Enterprise Application . Object Oriented Programming . Program Design Method . Web Programming</p>
              </div>
            </div>
            <div className="col-md-12 row">
              <div className="col-md-2 row">
                <p className="accomplishment-amount">5</p>
              </div>
              <div className="col-md-8">
                <h4 className="accomplishment-title">Honors & Awards</h4>
                <p>Expert Indonesia . Expert Indonesia . Expert Indonesia . Secretary of Brick Laying Competition . Best Research Interest Group Topics</p>
              </div>
            </div>
          </div>
          <div className="card row">
            <h4 className="card-title">Interest</h4>
            <div className="col-md-6 row">
              <div className="col-md-4">
                <img className="interest-image" src="https://yt3.ggpht.com/a-/AN66SAwM8nUbsY9lgvPIlXqfSoFkTGig5mwLhCLc4g=s900-mo-c-c0xffffffff-rj-k-no" alt="work" />
              </div>
              <div className="col-md-8">
                <h4>Rakuten</h4>
                <p>65,303 followers</p>
              </div>
            </div>
            <div className="col-md-6 row">
              <div className="col-md-4">
                <img className="interest-image" src="http://www.binus.edu/wp-content/uploads/2016/11/logoBINUS.png" alt="work" />
              </div>
              <div className="col-md-8">
                <h4>Bina Nusantara University</h4>
                <p>9,264 followers</p>
              </div>
            </div>
            <div className="col-md-6 row">
              <div className="col-md-4">
                <img className="interest-image" src="https://akcdn.detik.net.id/customthumb/2015/04/07/76/qnblogo460.jpg?w=780&q=90" alt="work" />
              </div>
              <div className="col-md-8">
                <h4>QNB Group</h4>
                <p>87,140 followers</p>
              </div>
            </div>
            <div className="col-md-6 row">
              <div className="col-md-4">
                <img className="interest-image" src="http://www.binus.edu/wp-content/uploads/2016/11/logoBINUS.png" alt="work" />
              </div>
              <div className="col-md-8">
                <h4>Universitas Bina Nusantara</h4>
                <p>47,277 followers</p>
              </div>
            </div>
            <div className="col-md-6 row">
              <div className="col-md-4">
                <img className="interest-image" src="https://yt3.ggpht.com/a-/AN66SAxGPSDn6i9i_pSo-Wc2rqe8VfSAnhbbzM7yPw=s900-mo-c-c0xffffffff-rj-k-no" alt="work" />
              </div>
              <div className="col-md-8">
                <h4>Bill Gates</h4>
                <p>16,436,169 followers</p>
              </div>
            </div>
            <div className="col-md-6 row">
              <div className="col-md-4">
                <img className="interest-image" src="http://www.binus.edu/wp-content/uploads/2016/11/logoBINUS.png" alt="work" />
              </div>
              <div className="col-md-8">
                <h4>Universitas Bina Nusantara</h4>
                <p>59,416 followers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <Viewed />
        </div>
      </div>
    )
  }
}

export default Profile;
