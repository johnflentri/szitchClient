import React, { Component } from 'react'

export default class Notifications extends Component {
  render() {
    return (
      <div className="centerDefault">
        <h3 className="pageHeading">Notifications</h3>
        <p style={{ color: "red" }}>You have 1 new message!</p>
        <p style={{ color: "blue" }}>You have 2 new friend requests!</p>
        <p style={{ color: "green" }}>Team XYZ accepted your join request! (You are scheduled to play today, 19:00 CEST)</p>
      </div>
    )
  }
}
