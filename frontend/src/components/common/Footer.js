import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (

    <div className="container has-background-black">
      <div className="notification center text">
        <h2> 14a Lamb Street Spitalfield, London E16EA </h2>
        <h2> 0207 426 2121</h2>
        <a href={'mailto: london@pimpsandpinups.com'}>london@pimpsandpinups.com</a>
        <h2>Opening hours
        10am – 8pm Weekdays
        10am – 6pm Weekends</h2>
        {/* <a className="instagram" href="https://res.cloudinary.com/do68wjft3/image/upload/v1600350372/WhatsApp_Image_2020-09-17_at_13.49.16_2_nalwsi.jpg" alt="pic"/> */}
        <Link to={'/terms'}>
          <h2>Terms and Conditions</h2>
        </Link>
        <a target='_blank' href="https://www.instagram.com/pimpsandpinups/" rel=" noopener noreferrer"
          className="instagram"
        >
          <FontAwesomeIcon  icon={faInstagram} size="2x" />
        </a>
        <p className="credits">© 2020 All Rights Reserverd. Site By Bec Sun</p>
        <p className="credits">© Photos by</p><a className="credits" href="https://www.instagram.com/mikeypdodd" alt="pic">@mikeypdodd</a>
      </div>
    </div>

  )
}
export default Footer
