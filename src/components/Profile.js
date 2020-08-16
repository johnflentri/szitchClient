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

    const userId = parseInt(this.props.currentUser.user.id)
    const currentProfile = this.props.currentUser.users.find(user => user.id === userId)
    const accuracyPercent = currentProfile.accuracyPercent
    const killDeathRatio = currentProfile.killDeathRatio
    const gamerTag = currentProfile.username
    const overallRank = currentProfile.overallRank
    let protential = currentProfile.protential
    const bio = currentProfile.bio
    const averageDamagePerRound = currentProfile.averageDamagePerRound

    if (protential === "A+" || protential === "A") {
      protential = <span style={{ color: "green" }}>{protential}</span>
    } else if (protential === "B+" || protential === "B" || protential === "B-") {
      protential = <span style={{ color: "gold" }}>{protential}</span>
    } else {
      protential = <span style={{ color: "blue" }}>{protential}</span>
    }

    return (
      <div className="centerDefault">
        <div>
          <div className="page_navigation-items">
            <ul>
              <li><Link to={`/`}>Explore</Link></li>
              <li><Link to={`/user/${this.props.currentUser.user.id}`}>Profile</Link></li>
              <li><Link to={`/events`}>Events</Link></li>
              <li><Link to={`/matches`}>Matches</Link></li>
              <li><Link to={`/friends`}>Friends</Link></li>
            </ul>
          </div>
          <h3 className="pageHeading">Profile</h3>
          <div>
            <div className="container">
              <div className="item">
                <img style={{ height: "200px", width: "200px" }} src={currentProfile.avatarURL} alt="User Avatar" />
              </div>
              <div className="item">
                <h3 className="pageHeading" style={{ textAlign: "center" }}>{gamerTag}</h3>
                <p style={{ textAlign: "center" }}>"{bio}"</p>
                <h4 style={{ textAlign: "center" }}>CSGO Rank: Silver</h4>
                <h4 style={{ textAlign: "center" }}>Szitch Rank: {overallRank}/{this.props.currentUser.users.length}</h4>
                <h4 style={{ textAlign: "center" }}>Protential: {protential}</h4>
              </div>
            </div>
            <h4 className="pageHeading">Game Data</h4>
            <div className="container">
              <p>Accuracy: {accuracyPercent}%</p>
              <p>Kill/Death Ratio: {killDeathRatio}</p>
              <p>Average Damage per Round: {averageDamagePerRound}</p>
            </div>
            <h4 className="pageHeading">Strengths</h4>
            <div className="container">
              <div>
                <p>Reflex speed: 0.225s</p>
                <p>Mouse control: Top 10%</p>
              </div>
              <div>
                <p>Abstract Thinking: Top 15%</p>
                <p>Communication: Top 10%</p>
              </div>
            </div>
            <h4 className="pageHeading">Featured content</h4>
            <div className="container">
              <div>
                <img style={{ height: "150px", width: "250px" }} src="https://www.9minecraft.net/wp-content/uploads/2019/03/CSGO-Content-Pack-mod-for-minecraft-14.png" alt="contentExample1"></img>
                <p style={{ textAlign: "center", color: "blue" }}>How I warm up for a game</p>
              </div>
              <div>
                <img style={{ height: "150px", width: "250px" }} src="https://i.ytimg.com/vi/9kJRq-3-jYI/maxresdefault.jpg" alt="contentExample2"></img>
                <p style={{ textAlign: "center", color: "blue" }}>July highlights - Accuracy</p>
              </div>
            </div>
          </div>
          <div className="centerDefault">
            <h4 className="pageHeading">Team</h4>
            <h5 className="pageHeading"><Link>TEAM NAME</Link></h5>
            <div className="container">
              <p style={{ color: "blue" }}>{currentProfile.username}</p>
              <p>Player 2</p>
              <p>Player 3</p>
              <p>Player 4</p>
              <p>Player 5</p>
            </div>
            <p className="pageHeading"><Link>Game scheduled today at 19:00 CEST</Link></p>
          </div>
        </div>
        <UserList currentProfileAvatar={currentProfile.avatarURL} gamerTagVs={gamerTag} accuracyPercentVs={accuracyPercent} killDeathRatioVs={killDeathRatio} params={this.props.match.params.id} averageDamagePerRoundVs={averageDamagePerRound} overallRankVs={overallRank} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
