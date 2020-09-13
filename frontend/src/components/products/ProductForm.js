import React from 'react'
import Select from 'react-select'


class ProductForm extends React.Component {
  state = {
    formData: {
      hairtype: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.props.history.push(`/surfspots?search=${this.state.search}`)
  }

  render(){
    return (

      <div className="field has-addons">
        <div className="field">
          <div className="control">
            <label className="radio">
              <h1>Dry and Damanged</h1>
              <input
                type="radio"
                value="damaged"
                name="question" />Yes
            </label>
            <label className="radio">
              <h1>Straight</h1>
              <input
                type="radio"
                value="leavein"
                name="question" /> Yes
            </label>
            <label className="radio">
              <h1>Curly/Frizzy</h1>
              <input
                type="radio"
                value="curley"
                name="question" />Yes
            </label>
            <label className="radio">
              <h1>Normal</h1>
              <input
                type="radio"
                value="leave"
                name="question" />Yes
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductForm

