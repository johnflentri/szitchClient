import React, { Component } from 'react'

export default class Events extends Component {
  render() {
    return (
      <div className="centerDefault">
        <h3 className="pageHeading">
          Events
      </h3>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/">DreamHack Masters Summer 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/">DreamHack Open Summer 2020 - Europe</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/">ESL One Cologne 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/">ESL One Cologne 2020 - Europe</a>
        </div>
      </div>
    )
  }
}
