import React from 'react'

import ProductDetail from './ProductDetail'
import { getAllProducts } from '../lib/api'
import ProductForm from './ProductForm'

class ProductList extends React.Component {
  state = { products: [] }

  async componentDidMount() {
    try {
      const res = await getAllProducts()
      this.setState({ products: res.data })
    } catch (err){
      this.props.history.push('/*')
    }
    console.log()
    console.log(this.state.products)

  }
  render() {
    return (
      <div>
        <h1>Products we recommend for:</h1>
        <ProductForm />
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.products.map(product => (
                <ProductDetail key={product._id} {...product}/>
              ))}
            </div>
          </div>
        </section>
      </div>


    )
  }
}

export default ProductList
