import React, { Component } from 'react'
import { connect } from "react-redux";
import { getCurrentUser } from "../actions";
import { Link } from "react-router-dom";

class UserList extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    console.log("UserList props", this.props)

    if (!this.props.userList) {
      return <div>Loading...</div>
    }

    const { userList } = this.props

    const mappedUsers = userList.map(userProfile => (
      <div key={userProfile.id}>
        <ul>
          <Link to={`/user/${userProfile.id}`}>{userProfile.username} </Link>
        </ul>
      </div>
    ))

    return (
      <div className="centerDefault">
        <h3 className="pageHeading">User Profiles</h3>
        {mappedUsers}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // userList: state.userList
  userList: state.user.currentUser.users
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);