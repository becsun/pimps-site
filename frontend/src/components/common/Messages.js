import React from 'react'


class Messages extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  render(){
    return (
      <>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith"/>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Message</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">

          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary">
            Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default Messages
