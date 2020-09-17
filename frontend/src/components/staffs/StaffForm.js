import React from 'react'

const StaffForm = ({ handleChange }) => {
  return (
    <div className="control is-right">
      <div className="select is-dark is-multiple bar is-rounded">
        <select onChange={ handleChange }>
          <option onChange={ handleChange } value="any" className="searchText">  What do you need? Click here to find your stylist!</option>
          <option onChange={handleChange} value="Haircut">Haircut</option>
          <option onChange={handleChange} value="Styling">Styling</option>
          <option onChange={handleChange} value="Bleach">Bleach</option>
          <option onChange={handleChange} value="Balayage">Balayage</option>
          <option onChange={handleChange} value="Treatments">Treatments</option>
          <option onChange={handleChange} value="Tint">Tint</option>
          <option onChange={handleChange} value="Kerastraight">Kerastraight</option>
          <option onChange={handleChange} value="Highlights">Highlights</option>
        </select>
      </div>
    </div>

  )
}

export default StaffForm
