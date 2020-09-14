import React from 'react'

import { getAllStaff, getAllServices } from '../lib/api'
import StaffDetail from './StaffDetail'
import StaffForm from './StaffForm'

class StaffList extends React.Component {
  state = {
    staffs: null,
    services: null,
    filteredStaff: null
  }

  async componentDidMount() {
    try {
      const res = await getAllStaff()
      this.setState({ staffs: res.data })

    } catch (err){
      this.props.history.push('/*')
    }

    this.getServices()
  }

  getServices = async() => {
    const res = await getAllServices()
    this.setState({ services: res.data })
  }

  handleChange = (event) =>{
    this.filterServices(event.target.value)
  }

  filterServices = (selectedValue) => {
    const { services } = this.state
    const filteredServices = services.filter(service => {
      return service.info === selectedValue
    })
    this.filterStaff(filteredServices)
  }

  filterStaff = (filteredServices) => {
    console.log(filteredServices)
    const { staffs } = this.state
    filteredServices = filteredServices.flatMap(item => item.staff)
    const filteredStaff = staffs.filter(staff => {
      return filteredServices.includes(staff.id)
    })
    this.setState({filteredStaff})
  }



  render() {
    if (!this.state.staffs) return null
    return (
      <section className="section">
        <StaffForm handleChange={this.handleChange}/>
        <div className="container">
          <div className="columns is-multiline">
            {!this.state.filteredStaff && this.state.staffs.map(staff => (
              <StaffDetail key={staff._id} {...staff}/>
            ))}
            {this.state.filteredStaff && this.state.filteredStaff.map(staff => (
              <StaffDetail key={staff._id} {...staff}/>
            ))}
          </div>
        </div>
      </section>

    )
  }
}
export default StaffList
