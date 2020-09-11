import React from 'react'


import { getAllStaff } from '../lib/api'


class StaffList extends React.Component {
  state = { staffs: [] }


  async componentDidMount() {
    try {
      const res = await getAllStaff()
      this.setState({ staffs: res.data })
    } catch (err){
      console.log(err)
    }
    console.log(this.state.staffs)
  }
  render() {
    return (

      
      <h1>hi</h1>

    )
  }
}
export default StaffList
