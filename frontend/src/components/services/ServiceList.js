import React from 'react'

import { getSingleService } from '../lib/api'

class ServiceList extends React.Component {
  state = {
    service: null
  }
  async componentDidMount() {
    const serviceID = this.props.match.params.id
    try {
      const res = await getSingleService(serviceID)
      this.setState({ service: res.data })
    } catch (err){
      console.log(err)
    }
    console.log(this.state.service)
  }

  
  render(){
    return (
      <>
        <section className="hero is-primary is-medium servicelistpage">
          <div className="hero-body">
            <div className="container">
              <h1 className="title ">
            Services
              </h1>
              <h2 className="subtitle">
            Styling
              </h2>
              <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
              </h2>
            </div>
          </div>
        </section>

        <div>
          <div className="container">
            <h2 className="title ">
            Styling
            </h2>
          </div>
        </div>
        <div>
          <div className="container">
            <h2 className="title ">
            Colour
            </h2>
          </div>
        </div>
        <div>
          <div className="container">
            <h2 className="title ">
            Treatments
            </h2>
          </div>
        </div>
        <div>
          <div className="container">
            <h2 className="title ">
            Kerastraight
            </h2>
          </div>
        </div>



      </>


    )
  }
}


export default ServiceList
