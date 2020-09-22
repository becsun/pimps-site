import React from 'react'

//get all the services through props
const ServiceDetail = (   props   ) => {
  console.log( props )

  return (

    <div>
      <div className="container is-fullhd">
        {props.info === 'Haircut' && <h1>{props.name} { '£' + props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'Styling' && <h1>{props.name} { '£' + props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'Bleach' && <h1>{props.name} { '£' + props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'Tint' && <h1>{props.name} { '£' + props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'Balayage' && <h1>{props.name} { '£' + props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'Kerastraight' && <h1>{props.name} { '£' + props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'Treatments' && <h1>{props.name} { '£' + props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'Highlights' && <h1>{props.name} { '£' + props.price}</h1>}
      </div>
    </div>
  )
}

export default ServiceDetail
