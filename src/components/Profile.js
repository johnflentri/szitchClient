import React, { Component } from 'react'
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { getCurrentUser } from "../actions";

class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const userId = parseInt(this.props.match.params.id)
    const accuracyPercent = this.props.currentUser.user.accuracyPercent
    const reactionTime = this.props.currentUser.user.reactionTime
    return (
      <div className="centerDefault">
        <h3 className="pageHeading">My Profile</h3>
        <p>{userId}'s Profile</p>
        <p>{userId} has an accuracy of X{accuracyPercent} percent.</p>
        <p>{userId} has a reaction time of X{reactionTime} seconds.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
