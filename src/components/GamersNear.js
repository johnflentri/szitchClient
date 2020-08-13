import React, { Component } from 'react'
import { connect } from "react-redux";

class GamersNear extends Component {
  render() {
    const mappedUsers = this.props.currentUser.users.map(user => (
      <div key={user.id}>
        <div >
          <img src={user.avatarURL} alt='userAvatar' width={'30%'} height={'30%'}></img>
          {user.username}
        </div>
      </div>
    ))

    return (
      <div className="centerDefault">
        <h3 className="pageHeading">Gamers near you</h3>
        <div>
          {mappedUsers}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  allContent: state.content
});

export default connect(mapStateToProps)(GamersNear);

