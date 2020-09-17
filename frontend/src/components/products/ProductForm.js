import React from 'react'


const ProductForm = ({ handleChange }) => {
  return (
    <div className="control is-right">
      <div className="select is-dark is-multiple bar is-rounded">
        <select onChange={handleChange}>
          <option className="searchText" value="all">Click On An Option To Find The Right Product For You!</option>
          <option onChange={handleChange} value="Damaged">Damaged</option>
          <option onChange={handleChange} value="All Types">All Types</option>
          <option onChange={handleChange} value="Fine">Fine</option>
          <option onChange={handleChange} value="Curly">Curly</option>
        </select>
      </div>
    </div>
  )
}

export default ProductForm

