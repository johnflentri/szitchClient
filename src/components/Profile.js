import React, { Component } from 'react'
import { connect } from "react-redux";
import { getCurrentUser } from "../actions";

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
        <h3 className="pageHeading">My Profile</h3>
        <p>Gamertag: {gamerTag}</p>
        <p>Accuracy: {accuracyPercent}%</p>
        <p>KDR: {killDeathRatio}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
