import React from 'react'
// import { getAllStaff } from '../lib/api'


const StaffForm = ({ handleChange}) => {
  return (
    <div className="control is-right">
      <div className="select is-dark is-multiple bar is-rounded">
        <select onChange={ handleChange }>
          <option onChange={ handleChange } value="any" className="searchText">  What do you need? Click here to see your Stylist!</option>
          {/* <option onChange={handleChange} value="colour">Colour</option> */}
          <option onChange={handleChange} value="haircut">haircut</option>
          <option onChange={handleChange} value="styling">styling</option>
          <option onChange={handleChange} value="bleach">bleach</option>
          <option onChange={handleChange} value="balayage">balayage</option>
          <option onChange={handleChange} value="treatment">treatment</option>
          <option onChange={handleChange} value="tint">tint</option>
          <option onChange={handleChange} value="kerastraight">kerastraight</option>
          <option onChange={handleChange} value="highlights">highlights</option>
        </select>
      </div>
    </div>

  )
}

export default StaffForm
