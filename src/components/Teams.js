import React, { Component } from 'react'
import { connect } from "react-redux";

class Teams extends Component {
  render() {
    const mappedTeams = this.props.allTeams.map(team => (
      <div key={team.id}>
        <div>
          <img src={team.teamLogo} alt='teamLogo' width={'30%'} height={'30%'}></img>
          {team.teamName}
        </div>
      </div>
    ))

    return (
      <div className="centerDefault">
        <h3 className="pageHeading">Teams searching for players</h3>
        <div>
          {mappedTeams}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  allContent: state.content,
  allTeams: state.teams
});

export default connect(mapStateToProps)(Teams);

