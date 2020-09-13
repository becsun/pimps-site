import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" class="navbar-item">
            <img className="logopic" width="112" height="28" alt="Pimps" />
          </Link>
          <Link to="/" className="navbar-item">
              Pimps And PinUps
          </Link>
          <Link to="/services" className="navbar-item">Services</Link>
          <Link to ="/products" className="navbar-item">Products</Link>
          <Link to="/staffs" className="navbar-item">The Crew</Link>
          <Link to="/contact" className="navbar-item ">Contact</Link>
        </div>
      </div>
      {/* <span onClick={this.handleToggle} className={`navbar-burger ${this.state.isOpen ? 'is-active' : ''}`}>
            <span>Services</span>
            <span>Crew</span>
            <span>Products</span>
          </span>
        </div>
        <div className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/contact" className="navbar-item">Contact</Link>
          </div> */}

    </nav>
  )
}
export default withRouter(Navbar)
