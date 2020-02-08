import React, { Component } from 'react';
import Identicon from 'identicon.js';


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
        <div class="container">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0"
             href="https://reymom.github.io/"
             target="_blank"
             rel="noopener noreferrer">
            ReyMon PREdic
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="#" className="nav-item nav-link">Explore</a>
                <a href="#" className="nav-item nav-link">About</a>
                <a href="#" className="nav-item nav-link">Contact</a>
            </div>
          </div>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-secondary">
                <small id="account">{this.props.account}</small>
              </small>
              { this.props.account
                ? <img className='ml-2'
                       width='30'
                       height='30'
                       src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}/>
                : <span></span>
              }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

  export default Navbar;
