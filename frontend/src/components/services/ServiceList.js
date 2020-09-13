import React from 'react'

import { getAllServices } from '../lib/api'
import StaffDetail from '../staffs/StaffDetail'

class ServiceList extends React.Component {
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
      <>
        <section className="hero is-primary is-medium servicelistpage">
          <div className="hero-body">

          </div>
        </section>
        <div>
          {/* {this.state.services.map(service => (
            key={service.id} {services.styling}
          ))} */}
        </div>
      </>


    )
  }
}


export default ServiceList
