import React, { Component } from 'react'
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { getCurrentUser } from "../actions";

class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {

    return (
      <div className="centerDefault">
        <h3 className="pageHeading">My Profile</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
