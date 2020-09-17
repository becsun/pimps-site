import React from 'react'

import 'mapbox-gl/dist/mapbox-gl.css'
import Footer from './Footer'
import ReactMapGL, {  NavigationControl, Marker } from 'react-map-gl'

class ContactPage extends React.Component {
  state = {
    viewport: {
      height: '80vh',
      width: '100vh',
      latitude: 51.518,
      longitude: -0.076,
      zoom: 14

    }
  }

  onViewportChange = viewport => this.setState({ viewport })

  render() {
    return (
      <section className="has-background-black">
        <h1 className="contactPage">LOCATION</h1>
        {/* <div className="imageSize">
          <img className="pimps" src="https://res.cloudinary.com/do68wjft3/image/upload/v1600278059/Pimps-2620_yhcgwg.jpg" alt="salon"/>
        </div> */}

        {/* //put map on page */}
        <div className="contact productbackground map" >
          <ReactMapGL
            {...this.state.viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            mapStyle='mapbox://styles/mapbox/dark-v10'
            onViewportChange={viewport => this.setState({ viewport })}
          >
            <Marker
              latitude={51.520073}
              longitude={	-0.075212}
            >
              <div className="marker" />
            </Marker>
            <div className="buttons">
              <NavigationControl />
            </div>
          </ReactMapGL>
        </div>
        <Footer />
      </section>

    )
  }
}

export default ContactPage
