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

  // filterServices = (service) => {
  //   const { services } = this.state

  // }

  render(){
    return (

      <section className="hero is-primary is-medium servicelistpage">
        <div className="hero-body">
        </div>
        <div>
          {this.state.services.map(service => (
            <ServiceDetail key={service._id} {...service} />
          ))}
        </div>
      </section>
    )
  }
}


export default ServiceShow
