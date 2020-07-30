import React, { Component } from 'react'
import { connect } from "react-redux";
import { getCurrentUser } from "../actions";

class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    console.log("Profile page props", this.props)
    if (!this.props.currentUser) {
      return <div>Loading...</div>
    }
    const currentUser = (this.props.currentUser.user)
    const accuracyPercent = currentUser.accuracyPercent
    const killDeathRatio = currentUser.killDeathRatio
    const gamerTag = currentUser.username
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
