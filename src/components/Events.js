import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { getCurrentUser, getEvents } from "../actions";
import { connect } from "react-redux";

class Events extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getEvents()
  }

  render() {
    if (!this.props.events) {
      return <div>Loading...</div>
    }
    return (
      <div className="centerDefault">
        <div className="page_navigation-items">
          <ul>
            <li><Link to={`/`}>Explore</Link></li>
            <li><Link to={`/user/${this.props.currentUser.user.id}`}>Profile</Link></li>
            <li><Link to={`/events`}>Events</Link></li>
            <li><Link to={`/matches`}>Matches</Link></li>
            <li><Link to={`/friends`}>Friends</Link></li>
          </ul>
        </div>
        <h3 className="pageHeading">
          Events
      </h3>
        <div className="eventEligibleText">
          <h4>You can join!</h4>
        </div>
        <div className="eventIneligibleText">
          <h4>Not able to join</h4>
        </div>
        <h3 className="pageHeading">
          Local Tournaments
      </h3>
        <div className="eventEligible">
          <li><Link to={`/event/${this.props.events[0].id}`}>Amsterdam Amateur League - Knockout Tournament</Link></li>
        </div>
        <div className="eventEligible">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Open Summer 2020 - Europe</a>
        </div>
        <div className="eventEligible">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Masters Summer 2020 - North America</a>
        </div>
        <div className="eventEligible">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Open Summer 2020 - Europe</a>
        </div>
        <h3 className="pageHeading">
          Netherlands Semi-Pro
      </h3>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - North America</a>
        </div>
        <div className="eventEligible">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - Europe</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - Europe</a>
        </div>
        <h3 className="pageHeading">
          ESL PRO
      </h3>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Masters Summer 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Open Summer 2020 - Europe</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Masters Summer 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Open Summer 2020 - Europe</a>
        </div>
        <h3 className="pageHeading">
          DreamHack PRO
      </h3>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - Europe</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - Europe</a>
        </div>
        <h3 className="pageHeading">
          Benelux Semi-Pro
      </h3>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Masters Summer 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Open Summer 2020 - Europe</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Masters Summer 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Open Summer 2020 - Europe</a>
        </div>
        <h3 className="pageHeading">
          Dutch Pro League
      </h3>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - Europe</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">ESL One Cologne 2020 - Europe</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  events: state.event
});

const mapDispatchToProps = { getCurrentUser, getEvents };

export default connect(mapStateToProps, mapDispatchToProps)(Events);

