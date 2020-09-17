import React from 'react'
import { getSingleStaff } from '../lib/api'

class StaffShow extends React.Component {
  state = {
    staff: null
  }

  async componentDidMount() {
    //pulls the staff ID from URL bar
    const staffID = this.props.match.params.id
    try {
      const res = await getSingleStaff(staffID)
      this.setState({ staff: res.data })
      console.log(res.data)
    } catch (err){
      console.log(err)
    }
  }

  render (){
    const { staff } = this.state
    if (!this.state.staff) return null
    return (
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered crewShowTitle">{staff.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={staff.image} alt={staff.name} />
              </figure>
            </div>
            <div className="column is-half roleTitle">
              <p>Position in the salon: {staff.role}</p>
              <hr />
              <h4 className="title is-4 crewBio"><span role="img" aria-label="bio"></span> {staff.bio}</h4>
              <hr />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default StaffShow
