import React from 'react'


const StaffForm = ({ handleChange }) => {
  return (
    <div className="control">
      <div className="select is-primary is-multiple">
        <select onChange={handleChange }>
          <option>Select dropdown</option>
          <option onChange={handleChange} value="colour">Colour</option>
          <option value="cut">cut</option>
          <option value="treatment">treatment</option>
        </select>
      </div>
    </div>

  )
}

export default StaffForm
