import React, { Component } from "react"
import { Link } from 'gatsby'
import './header.css'

class Header extends Component {

  render() {
    return (
      <header>
        <Link to='/' className='header-link'>
          <h1>{this.props.siteTitle}</h1>
        </Link>
      </header>
    );
  }
}

export default Header