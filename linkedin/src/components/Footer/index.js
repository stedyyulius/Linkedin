import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer col-md-12">
        <img className="linkedin-logo" src="https://www2.le.ac.uk/departments/engineering/people/academic-staff/ioannis_kyriakopoulos/linkedin.svg" alt="linkedin logo" />
        <div className="col-md-12">
          <div className="col-md-6 row">
            <Link className="col-md-4 footer-link" to='/' >About</Link>
            <Link className="col-md-4 footer-link" to='/' >Talent Solutions</Link>
            <Link className="col-md-4 footer-link" to='/' >Community Guideliness</Link>
            <Link className="col-md-4 footer-link" to='/' >Careers</Link>
            <Link className="col-md-4 footer-link" to='/' >Marketing Solutions</Link>
            <Link className="col-md-4 footer-link" to='/' >Privacy & Terms</Link>
            <Link className="col-md-4 footer-link" to='/' >Advertising</Link>
            <Link className="col-md-4 footer-link" to='/' >Sales Solutions</Link>
            <Link className="col-md-4 footer-link" to='/' >Send feedback</Link>
            <Link className="col-md-4 footer-link" to='/' >Mobile</Link>
            <Link className="col-md-4 footer-link" to='/' >Small Business</Link>
            <Link className="col-md-4 footer-link" to='/' >Safety Center</Link>
          </div>
          <div className="col-md-3">
            <div className="col-md-12">
              <img className="image-circle" src="https://facilities.uw.edu/files/media/question-mark.png" alt="question"/>
              <h5>Questions?</h5>
              <p>Visit our Help Center</p>
            </div>
            <br /><br />
            <div className="col-md-12">
              <img className="image-circle" src="http://pluspng.com/img-png/gear-logo-vector-png-open-2000.png" alt="gear"/>
              <h5>Manage your account and privacy.</h5>
              <p>Go to your Settings</p>
            </div>
          </div>
          <div className="col-md-3">
            <p>Select Language</p>
            <select className="form-control">
              <option>English (English)</option>
              <option>Indonesia (Indonesia)</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
