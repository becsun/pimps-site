import React from 'react'


const StaffForm = ({ handleChange }) => {
  return (
    <div className="control is-right">
      <div className="select is-dark is-multiple bar is-rounded">
        <select onChange={handleChange }>
          <option className="searchText">Click On An Option To Find The Right Stylist For You!</option>
          <option onChange={handleChange} value="colour">Colour</option>
          <option value="cut">cut</option>
          <option value="treatment">treatment</option>
        </select>
      </div>
    </div>

  )
}

export default StaffForm
