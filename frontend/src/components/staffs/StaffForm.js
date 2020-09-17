import React from 'react'
// import { getAllStaff } from '../lib/api'


const StaffForm = ({ handleChange }) => {
  return (
    <div className="control is-right">
      <div className="select is-dark is-multiple bar is-rounded">
        <select onChange={ handleChange }>
          <option onChange={ handleChange } value="any" className="searchText">  What do you need? Click here to find your stylist!</option>
          {/* <option onChange={handleChange} value="colour">Colour</option> */}
          <option onChange={handleChange} value="Haircut">haircut</option>
          <option onChange={handleChange} value="Styling">styling</option>
          <option onChange={handleChange} value="Bleach">bleach</option>
          <option onChange={handleChange} value="Balayage">balayage</option>
          <option onChange={handleChange} value="Treatment">treatment</option>
          <option onChange={handleChange} value="Tint">tint</option>
          <option onChange={handleChange} value="Kerastraight">kerastraight</option>
          <option onChange={handleChange} value="Highlights">highlights</option>
        </select>
      </div>
    </div>

  )
}

export default StaffForm
