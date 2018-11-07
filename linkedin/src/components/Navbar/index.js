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

const dummySearch = [
  {
    name: 'Wirjadi Lorens',
    image: 'https://media.licdn.com/dms/image/C4E03AQHuIxwXZ_c_vA/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=D3Sbz8UWYewznl_c8jak90AlgzLim8davPPRjVn37fo',
  },
  {
    name: 'Christian Hanggra',
    image: 'https://media.licdn.com/dms/image/C5603AQFqH8-QoYdjDQ/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=rnEAsI--sKiN-IqoGliTauM62RVX8q_IHl8tWFkTEzo',
  },
  {
    name: 'Stedy Yulius',
    image: 'https://media.licdn.com/dms/image/C4D03AQEopqkMledH9g/profile-displayphoto-shrink_100_100/0?e=1547078400&v=beta&t=tuDf_ByCZ3B3bzLdT0aGOvW4l6Zo_MAkWZc2Vbqn_Jo',
  },
]

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state={
      isSearch: false,
      onSearch: '',
      dummySearch: dummySearch,
    }
  }

  searchResults() {
    if (this.state.isSearch) {
      return (
        <div className="search-result-panel col-md-12">
          <b className="col-md-12">Search for</b>
          {this.state.dummySearch.map((dummy, i) =>
            <div className="search-row col-md-12" key={i}>
              <img className="search-image" src={dummy.image} alt="profile pic" />
              <p className="search-text">{dummy.name}</p>
            </div>
          )}
        </div>
      )
    }
    return null;
  }

  handleSearch(input) {
    const matchSearch = dummySearch.filter((data) => {
      return data.name.toLowerCase().includes(input.toLowerCase());
    })
    this.setState({
      dummySearch: matchSearch,
    })
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-main col-md-10">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="logo" />
          <div>
            <input className="search-bar" type="text" placeholder="Search" onClick={() => this.setState({ isSearch: true })} onChange={(e) => this.handleSearch(e.target.value)}/>
            <span className="fa fa-search"></span>
            {this.searchResults()}
          </div>
          <div className="navbar-menu col-md-12">
            {(menus.map((menu, i)=>
              <Link to="/" className="col-md-2" key={i}>
                <span className={menu.icon}></span>
                <p>{menu.name}</p>
              </Link>
            ))}
            <Link to="/" className="col-md-2">
              <img className="profile-icon" src="https://media.licdn.com/dms/image/C5603AQFqH8-QoYdjDQ/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=rnEAsI--sKiN-IqoGliTauM62RVX8q_IHl8tWFkTEzo" alt="profile icon" />
              <p className="me">Me<span className="fa fa-sort-desc"></span></p>
            </Link>
          </div>
        </div>
        <div className="navbar-main2">
          <Link to="/" className="col-md-2">
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
