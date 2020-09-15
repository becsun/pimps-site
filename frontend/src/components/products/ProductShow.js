import React from 'react'
import { getSingleProduct } from '../lib/api'


class ProductShow extends React.Component {
  state =  {
    product: null
  }

  async componentDidMount(){
    const productID = this.props.match.params.id
    try {
      const res = await getSingleProduct(productID)
      this.setState({ product: res.data })
      console.log(res.data)
    } catch (err){
      console.log(err)
    }
  }

  render(){
    const { product } = this.state
    if (!this.state.product) return null
    console.log(product)
    return (
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">{product.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={product.image} alt={product.name} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4"><span role="img" aria-label="brush">💆🏻‍♀️</span>{product.name}</h4>
              <p>{product.brand}</p>
              <hr />
              <h4 className="title is-4"><span role="img" aria-label="scissors">✄</span>{product.use}</h4>
              <hr />
              <p>{product.hairtype}</p>
              <hr />
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default ProductShow
