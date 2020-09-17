import React from 'react'

import { getAllProducts } from '../lib/api'
import ProductDetail from './ProductDetail'
import ProductForm from './ProductForm'
import Footer from '../common/Footer'


class ProductList extends React.Component {
  state = {
    products: null,
    filteredProducts: null }

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

  handleChange = (event) =>{
    this.filterProducts(event.target.value)
    console.log(event.target.value)
  }


    filterProducts = (selected) => {
      const { products } = this.state
      const filteredProducts = products.filter(product => {
        return product.hairtype  === selected
      })
      this.setState({ filteredProducts })
    }

    render() {
      if (!this.state.products) return null
      // if (!this.state.filteredProducts) return null
      return (
        <div className="productbackground">
          <h1 className="title crewPageTitle">
        Productss
          </h1>
          <ProductForm handleChange={this.handleChange}/>
          <section className="section has-background-black">
            <div className="container">
              <div className="columns is-multiline">
                {/*To filter the products according to the hair type. */}
                {!this.state.filteredProducts && this.state.products.map(product => (
                  <ProductDetail key={product._id} {...product}/>
                ))}
                {this.state.filteredProducts && this.state.filteredProducts.map(product => (
                  <ProductDetail key={product._id} {...product}/>
                ))}
                {this.state.filteredProducts === 'searchText' && this.state.filteredProducts.map(product => (
                  <ProductDetail key={product._id} {...product}/>
                ))}
              </div>
            </div>
            <Footer />
          </section>
        </div>

      )
    }
}

export default ProductList
