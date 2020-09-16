import React from 'react'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Footer from './Footer'
import Messages from './Messages'


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
      <section has-background-black>
        <h1 className="contact productbackground">LOCATION</h1>
        {/* //put map on page */}
        <div className="contact productbackground" >
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
        </div>
        <Messages />
        <Footer />

      </section>

    )
  }
}

export default ContactPage
