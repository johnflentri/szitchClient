import React, { Component } from 'react'
import { connect } from "react-redux";
import { getCurrentUser } from "../actions";
import { Link } from "react-router-dom";
import UserList from './UserList';

class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    if (!this.props.currentUser) {
      return <div>Loading...</div>
    }

    const userId = parseInt(this.props.match.params.id)
    const currentProfile = this.props.currentUser.users.find(user => user.id === userId)
    const accuracyPercent = currentProfile.accuracyPercent
    const killDeathRatio = currentProfile.killDeathRatio
    const gamerTag = currentProfile.username
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
        <h3 className="pageHeading">My Profile</h3>
        <p>Gamertag: {gamerTag}</p>
        <p>Accuracy: {accuracyPercent}%</p>
        <p>KDR: {killDeathRatio}</p>
        <UserList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
