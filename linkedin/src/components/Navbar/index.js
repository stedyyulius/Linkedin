import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const menus = [
  {
    icon: 'fa fa-home',
    name: 'Home'
  },
  {
    icon: 'fa fa-users',
    name: 'My Network'
  },
  {
    icon: 'fa fa-briefcase',
    name: 'Jobs'
  },
  {
    icon: 'fa fa-flickr',
    name: 'Messaging'
  },
  {
    icon: 'fa fa-bell',
    name: 'Notification'
  },
];

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-main col-md-8">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="logo" />
          <input className="search-bar" type="text" placeholder="Search" />
          <span className="fa fa-search"></span>
          <div className="navbar-menu col-md-10">
            {(menus.map((menu, i)=>
              <Link to="/" className="col-md-1" key={i}>
                <span className={menu.icon}></span>
                <p>{menu.name}</p>
              </Link>
            ))}
            <Link to="/" className="col-md-1">
              <img className="profile-icon" src="https://media.licdn.com/dms/image/C5603AQFqH8-QoYdjDQ/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=rnEAsI--sKiN-IqoGliTauM62RVX8q_IHl8tWFkTEzo" alt="profile icon" />
              <p className="me">Me<span className="fa fa-sort-desc"></span></p>
            </Link>
          </div>
        </div>
        <div className="navbar-main2">
          <Link to="/" className="col-md-1">
            <span className="fa fa-list"></span>
            <p className="me">Work<span className="fa fa-sort-desc"></span></p>
          </Link>
          <p  href="/" className="upgrade-premium">Free Upgrade to Premium</p>
        </div>
      </div>
    )
  }
}

export default Navbar;
