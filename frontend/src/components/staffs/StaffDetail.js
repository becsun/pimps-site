import React from 'react'
import { Link } from 'react-router-dom'

const StaffDetail = ({ name, favcut, image, id, bio, role }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-fullwidth">
    <Link to={`/staffs/${id}`}>
      <div className="card outline box-radius">
        <div className="card-header box-radius">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img className="staffimages" src={image} alt={name} loading="lazy" width="255" height="255" />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="">{role}</h5>
          <h5 className="">Favourite Cut: {favcut}</h5>
        </div>
      </div>
    </Link>
  </div>
)
export default StaffDetail
