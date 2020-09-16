import React from 'react'

//get all the services through props
const ServiceDetail = (   props   ) => {
  console.log( props )

  return (

    <div>
      <div className="container is-fullhd">
        {props.info === 'haircut' && <h1>{props.name} {props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'styling' && <h1>{props.name} {props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'styling' && <h1>{props.name} {props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'tint' && <h1>{props.name} {props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'balayage' && <h1>{props.name} {props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'kerastraight' && <h1>{props.name} {props.price}</h1>}
      </div>
      <div className="container is-widescreen">
        {props.info === 'treatment' && <h1>{props.name} {props.price}</h1>}
      </div>
    </div>




  )
}

export default ServiceDetail
