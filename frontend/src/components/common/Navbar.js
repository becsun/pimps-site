import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    isOpen: false
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.location.pathname !== this.props.location.pathname) {
  //     this.setState({ isOpen: false })
  //   }
  // }
  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Pimps And PinUps
            </Link>
            <span onClick={this.handleToggle} className={`navbar-burger ${this.state.isOpen ? 'is-active' : ''}`}>
              <span>Services</span>
              <span>Crew</span>
              <span>Products</span>
            </span>
          </div>
          <div className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link to="/cheeses" className="navbar-item">Menu</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(Navbar)
