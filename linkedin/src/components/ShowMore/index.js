import React, { Component } from 'react';

import './index.css';

class ShowMore extends Component {
  render() {
    return(
      <div className="showmore col-md-12">
        <b className="pointer">Show more <span className="fa fa-sort-desc"></span></b>
      </div>
    )
  }
}

export default ShowMore;
