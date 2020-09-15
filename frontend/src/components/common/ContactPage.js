import React from 'react'
import MapGL, { Marker } from 'react-map-gl'
// import { NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// import Terms from './Terms'


class ContactPage extends React.Component {
  state = {
    viewport: {
      height: '100vh',
      width: '100vh',
      latitude: 51.518,
      longitude: -0.076,
      zoom: 14

    }
  }

  onViewportChange = viewport => this.setState({ viewport })

  render() {
    return (
      <section>
        <h1 className="contact">LOCATION</h1>
        {/* //put map on page */}
        <MapGL
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle='mapbox://styles/mapbox/dark-v10'
          onViewportChange={this.onViewportChange}
        >
          <Marker
            latitude={51.520073}
            longitude={	-0.075212}
          >
            <div className="marker" />
          </Marker>
        </MapGL>
        <button onClick={this.handleZoomIn}>✚</button>
        <button>−</button>
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
