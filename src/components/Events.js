import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { getCurrentUser } from "../actions";
import { connect } from "react-redux";

class Events extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="centerDefault">
        <div className="page_navigation-items">
          <ul>
            <li><Link to={`/`}>Explore</Link></li>
            <li><Link to={`/user/${this.props.currentUser.user.id}`}>My Profile</Link></li>
            <li><Link to={`/events`}>Events</Link></li>
            <li><Link to={`/matches`}>Matches</Link></li>
            <li><Link to={`/streams`}>Streams</Link></li>
          </ul>
        </div>
        <h3 className="pageHeading">
          Events
      </h3>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Masters Summer 2020 - North America</a>
        </div>
        <div className="eventDefault">
          <a target="_blank" href="https://dreamhack.com/masters/schedule/" rel="noopener noreferrer">DreamHack Open Summer 2020 - Europe</a>
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
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Events);

