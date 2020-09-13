import React from 'react'

// import ProductDetail from './ProductDetail'
// import { getAllProducts } from '../lib/api'

class ProductList extends React.Component {
  // state = { products: [] }

  // async componentDidMount() {
  //   try {
  //     const res = await getAllProducts()
  //     this.setState({ products: res.data })
  //   } catch (err){
  //     console.log(err)
  //   }
  //   console.log()
  //   console.log(this.state.products)
  // }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {/* {this.state.products.map(product => (
              <ProductDetail key={product._id} {...product}/> */}
            {/* ))} */}
          </div>
        </div>
      </section>

    )
  }
}

export default ProductList
