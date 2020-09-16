import React from 'react'

import { Link } from 'react-router-dom'

const ProductDetail = ({ name, brand, image, id, hairtype }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-fullwidth">
      <Link to={`/products/${id}`}>
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title productTitle">{name}</h4>
          </div>
          <div className="card-image">
            <figure className="image image is-1by1">
              <img src={image} alt={name} loading="lazy" width="255" height="255" />
            </figure>
          </div>
          <div className="card-content">
            <h5 className="">Brand: {brand}</h5>
            {/* <h5 className="">{use}</h5> */}
            <h5 className="">Suitable Hair type: {hairtype}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default ProductDetail
