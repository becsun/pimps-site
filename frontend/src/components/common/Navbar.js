import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class Navbar extends React.Component {
  state = {
    isOpen: false
  }

  // function for when the navbar burger is clicked, to change the state.
handleToggle = () => {
  this.setState({ isOpen: !this.state.isOpen })
}
// To close the navbarbuger as the url does not match the previous. Props recieved from the window
componentDidUpdate(prevProps) {
  if (prevProps.location.pathname !== this.props.location.pathname) {
    this.setState({ isOpen: false })
  }
}

render() {
  return (
    <nav className="navbar isgreen">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Pimps & PinUps</Link>
          <span onClick={this.handleToggle} className={`navbar-burger ${this.state.isOpen ? 'is-active' : '' }`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/services" className="navbar-item font">Services</Link>
            <Link to ="/products" className="navbar-item">Products</Link>
            <Link to="/staffs" className="navbar-item">The Crew</Link>
            <Link to="/contact" className="navbar-item ">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
}
export default withRouter(Navbar)
