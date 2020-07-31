import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { getCurrentUser } from "../actions";
import { connect } from "react-redux";

class Streamers extends Component {
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
          Current and future Streamers, Welcome!
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Streamers);

