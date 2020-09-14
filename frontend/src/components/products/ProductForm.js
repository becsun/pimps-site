import React from 'react'

import { getAllProducts } from '../lib/api'


class ProductForm extends React.Component {
  state = {
    products: []
  }


  async componentDidMount() {
    try {
      const res = await getAllProducts()
      this.setState({ products: res.data })
    } catch (err){
      this.props.history.push('/*')
    }
    console.log(this.state.products.hairtype)
  }

    handleChange = (event) => {
      console.log(event.target)

      this.setState({ [event.target.name]: event.target.value })
    }



    // filterProducts =() =>{
    //   return this.products.filter(product => {
    //     product.name === event.target.value
    //   })
    // }



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
                  onChange={this.handleChange}
                  name="hairtype" />Yes
              </label>
              <label className="radio">
                <h1>Straight</h1>
                <input
                  type="radio"
                  value="fine"
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

