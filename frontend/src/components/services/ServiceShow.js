import React from 'react'

import { getAllServices } from '../lib/api'
import ServiceDetail from './ServiceDetail'

class ServiceShow extends React.Component {
  state = {
    services: []
  }
  async componentDidMount() {
    try {
      const res = await getAllServices()
      this.setState({ services: res.data })
    } catch (err){
      console.log(err)
    }
    console.log(this.state.services)
    console.log(this.state.services[3])
  }


  render(){
    return (
      <section className="hero 2is-primary servicelistpage has-background-black">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
        Hero title
            </h1>
            <h2 className="subtitle">
        Hero subtitle
            </h2>
            <div>
              {this.state.services.map(service => (
                <ServiceDetail key={service._id} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

    )
  }
}


export default ServiceShow
