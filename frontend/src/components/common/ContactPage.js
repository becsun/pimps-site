import React from 'react'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


class ContactPage extends React.Component {
  render() {


    return (
      //put map on page
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
    )
  }
}

export default ContactPage
