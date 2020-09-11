import React from 'react'

import { getAllStaff } from '../lib/api'
import StaffDetail from './StaffDetail'

class StaffList extends React.Component {
  state = { staffs: [] }

  async componentDidMount() {
    try {
      const res = await getAllStaff()
      this.setState({ staffs: res.data })
    } catch (err){
      console.log(err)
    }
    console.log()
    console.log(this.state.staffs)
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.staffs.map(staff => (
              <StaffDetail key={staff._id} {...staff}/>
            ))}
          </div>
        </div>
      </section>

    )
  }
}
export default StaffList
