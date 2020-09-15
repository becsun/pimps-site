import React from 'react'


const ProductForm = ({ handleChange }) => {
  return (
    <div className="control is-right">
      <div className="select is-dark is-multiple bar is-rounded">
        <select onChange={handleChange}>
          <option className="searchText">Click On An Option To Find The Right Product For You!</option>
          <option onChange={handleChange} value="damaged">damaged</option>
          <option value="curley">curley</option>
          <option value="straight">straight</option>
        </select>
      </div>
    </div>

  )
}

export default ProductForm

