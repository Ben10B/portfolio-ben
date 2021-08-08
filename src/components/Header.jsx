import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import '../css/header.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      scrollingLock: false
    };
  }
  componentDidMount = () => {
    let nav = document.getElementsByClassName('navigation')[0];
    if(this.props.page === '') nav.style.boxShadow = '0 0 10px #fff';
    else if(this.props.page === 'web') nav.style.boxShadow = '0 0 10px #00f';
    else if(this.props.page === 'graphic') nav.style.boxShadow = '0 0 10px #f00';
    else if(this.props.page === 'media') nav.style.boxShadow = '0 0 10px #0f0';
  }

  hover = (page) => {
    let nav = document.getElementsByClassName('navigation')[0];
    if(page === '') nav.style.boxShadow = '0 0 10px #fff';
    else if(page === 'web') nav.style.boxShadow = '0 0 10px #00f';
    else if(page === 'graphic') nav.style.boxShadow = '0 0 10px #f00';
    else if(page === 'media') nav.style.boxShadow = '0 0 10px #0f0';
  }
  exit = (page) => {
    let nav = document.getElementsByClassName('navigation')[0];
    if(page === '') nav.style.boxShadow = '0 0 10px #fff';
    else if(page === 'web') nav.style.boxShadow = '0 0 10px #00f';
    else if(page === 'graphic') nav.style.boxShadow = '0 0 10px #f00';
    else if(page === 'media') nav.style.boxShadow = '0 0 10px #0f0';
  }
  
  render() {
    let page = this.props.page;

    return (
      <ul data-aos="fade-down" data-aos-offset="0"
       id="nav" className={`navigation ${ this.state.scrollingLock ? 'sticky' : null}`}
       >
        <li onMouseLeave={()=>this.exit(page)} onMouseEnter={()=>this.hover('')}>
          <Link className={`${(page === '') ? "active" : null} navLink`} to="/">Home</Link>
        </li>
        <li onMouseLeave={()=>this.exit(page)} onMouseEnter={()=>this.hover('web')}>
          <Link className={`${(page === 'web') ? "active-blue" : null} navLink blue`} to="/web-design">Web</Link>
        </li>
        <li onMouseLeave={()=>this.exit(page)} onMouseEnter={()=>this.hover('graphic')}>
          <Link className={`${(page === 'graphic') ? "active-red" : null} navLink red`} to="/graphic-design">Graphic</Link>
        </li>
        <li onMouseLeave={()=>this.exit(page)} onMouseEnter={()=>this.hover('media')}>
          <Link className={`${(page === 'media') ? "active-green" : null} navLink green`} to="/media-design">Media</Link>
        </li>
      </ul>
    );
  }
}

export default Header;