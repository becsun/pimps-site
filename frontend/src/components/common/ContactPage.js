import React from 'react'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// import Terms from './Terms'


class ContactPage extends React.Component {
  render() {


    return (
      <section>
        <h1 className="contact">Contacts</h1>
        {/* //put map on page */}
        <MapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height={'100vh'}
          width={'100vh'}
          mapStyle='mapbox://styles/mapbox/dark-v10'
          latitude={51.515}
          longitude={-0.078}
          zoom={10}
        >
          <Marker
            latitude={51.515}
            longitude={-0.078}
          >
            <div className="marker" />
          </Marker>
        </MapGL>
        <h2> 14a Lamb Street Spitalfield, London E16EA </h2>
        <h2> 0207 426 2121</h2>
        <a href>london@pimpsandpinups.com</a>
        <h2>Opening hours
            10am – 8pm weekdays
            10am – 6pm weekends</h2>
        <a href>Terms and Conditions</a>
  
      </section>

    )
  }
}

export default ContactPage
