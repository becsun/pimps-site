import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      {/* <button onClick={this.handleZoomIn}>✚</button>
      <button>−</button> */}
      <h2> 14a Lamb Street Spitalfield, London E16EA </h2>
      <h2> 0207 426 2121</h2>
      <a href>london@pimpsandpinups.com</a>
      <h2>Opening hours
        10am – 8pm weekdays
        10am – 6pm weekends</h2>

      <Link to={'/terms'}>
        <h2>Terms and Conditions</h2>
      </Link>
    </div>

  )
}
export default Footer
