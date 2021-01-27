import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../home/home';
import Blog from '../blog/blog';
import Open from '../open/open';
import './header.scss';
import {WOW} from 'wowjs';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const wow = new WOW({
        offset: 100,
        mobile: false,
        live: true
    })

    wow.init();
  }
  handleClick() {
    this.setState(state => ({      
      isToggleOn: !state.isToggleOn    
    }));
  } 
  render() {
    return (
      <Router>
      <main>
      <nav class="navbar navbar-expand-lg navbar-light">
          <button class="navbar-toggler" onClick={this.handleClick}>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={ this.state.isToggleOn ? 'collapse navbar-collapse justify-content-lg-center' : 'collapse navbar-collapse justify-content-lg-center show'} id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" className='nav-link' onClick={this.handleClick} >الرئيسية</Link>
              </li>
              <li class="nav-item">
                <Link to="/timeline-2" className='nav-link' onClick={this.handleClick} >أهم الأحداث</Link>
              </li>
              <li class="nav-item">
                <Link to="/timeline-1" className='nav-link' onClick={this.handleClick} > أسماء رحلت  </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='content_wrapper'>
          <Switch>
            <Route path="/timeline-1">
              <Open />
            </Route>
            <Route path="/timeline-2">
              <Blog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> 
        </div>
      </main>  
      </Router>  
    );
  }
}

export default Header;
