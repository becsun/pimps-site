import React from 'react'
import { getAllServices } from '../lib/api'
import ServiceDetail from './ServiceDetail'
import Footer from '../common/Footer'
class ServiceShow extends React.Component {
  state = {
    services: []
    // haircut: [],
    // styling: [],
    // highlights: [],
    // bleach: [],
    // tint: [],
    // treatment: [],
    // kerastraight: []
  }
  async componentDidMount() {
    try {
      const res = await getAllServices()
      const sortedServices = res.data.reduce((sortedServices, currentService) => {
        const category = currentService.info
        if (!sortedServices[category]) sortedServices[category] = []
        sortedServices[category].push(currentService)
        return sortedServices
      },{})
      this.setState({ sortedServices: sortedServices, services: res.data })
    } catch (err){
      console.log(err)
    }
    console.log(this.state.services)
    console.log(this.state.services[3])
    console.log(this.state.bleach)
  }
  render(){
    console.log('this.state', this.state)
    const { sortedServices } = this.state
    return (
      <section className="hero 2is-primary servicelistpage has-background-black">
        <div className="hero-body is-fullheight pricelist">
          <div className="container serviceAlign">
            <h1 className="title servicetitle"> Services
            </h1>
            <div>
              {sortedServices && Object.entries(sortedServices).map(([serviceType, servicesInThisType])=> {
                return <div className="serviceList" key={serviceType}>
                  <h1 className="serviceHeading">{serviceType }</h1>
                  {servicesInThisType.map(service => {
                    return <ServiceDetail key={service._id} {...service} />
                  })}
                </div>
              })}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}
export default ServiceShow
