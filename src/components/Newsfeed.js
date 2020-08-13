import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import ReactPlayer from 'react-player'

import { getCurrentUser, getAllContent, getAllTeams } from "../actions";

import Questions from './Questions';

class Newsfeed extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getAllContent()
    this.props.getAllTeams()
  }

  render() {
    if (!this.props.currentUser || !this.props.allContent) {
      return <div>Loading...</div>
    } else if (this.props.currentUser.user.newPlayer === true) {
      return (
        <Questions />
      )
    }

    const trendingFirst = this.props.allContent[0]
    const trendingSecond = this.props.allContent[1]
    const trendingThird = this.props.allContent[2]

    return (
      <div className="centerDefault">
        <div className="page_navigation-items">
          <ul>
            <li><Link to={`/`}>Explore</Link></li>
            <li><Link to={`/user/${this.props.currentUser.user.id}`}>Profile</Link></li>
            <li><Link to={`/events`}>Events</Link></li>
            <li><Link to={`/matches`}>Matches</Link></li>
            <li><Link to={`/friends`}>Friends</Link></li>
          </ul>
        </div>
        <h3 className="pageHeading">Explore</h3>
        <p className="pageHeading">Trending content for you - <Link to={`/content`}>more</Link></p>
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=XDCja2ckJCg"
        /> */}
        <div>
          <img src={trendingFirst.img} alt="trending1"
            width={'100%'}
            height={'100%'} />
          <img src={trendingSecond.img} alt="trending2"
            width={'50%'}
            height={'50%'} />
          <img src={trendingThird.img} alt="trending3"
            width={'50%'}
            height={'50%'} />
        </div>
        <br />
        <br />
        <p className="pageHeading">Popular gamers for you - <Link to={`/popular`}>more</Link></p>
        <div className="container">
          <div >
            <img src={this.props.currentUser.users[0].avatarURL} alt="userRecommend1"
              width={'175px'}
              height={'85%'}></img>
            <p style={{ textAlign: "center" }}>{this.props.currentUser.users[0].username}</p>
          </div>
          <div >
            <img src={this.props.currentUser.users[1].avatarURL} alt="userRecommend2"
              width={'175px'}
              height={'85%'}></img>
            <p style={{ textAlign: "center" }}>{this.props.currentUser.users[1].username}</p>
          </div>
          <div >
            <img src={this.props.currentUser.users[2].avatarURL} alt="userRecommend3"
              width={'175px'}
              height={'85%'}></img>
            <p style={{ textAlign: "center" }}>{this.props.currentUser.users[2].username}</p>
          </div>
        </div>
        <br />
        <p className="pageHeading">Recommended players near you - <Link to={`/near`}>more</Link></p>
        <div className="container">
          <div >
            <img src={this.props.currentUser.users[3].avatarURL} alt="userRecommend4"
              width={'175px'}
              height={'85%'} />
            <p style={{ textAlign: "center" }}>{this.props.currentUser.users[3].username}</p>
          </div>
          <div >
            <img src={this.props.currentUser.users[4].avatarURL} alt="userRecommend5"
              width={'175px'}
              height={'85%'} />
            <p style={{ textAlign: "center" }}>{this.props.currentUser.users[4].username}</p>
          </div>
          <div >
            <img src={this.props.currentUser.users[5].avatarURL} alt="userRecommend6"
              width={'175px'}
              height={'85%'} />
            <p style={{ textAlign: "center" }}>{this.props.currentUser.users[5].username}</p>
          </div>
        </div>
        <br />
        <p className="pageHeading">Teams looking for a player - <Link to={`/teams`}>more</Link></p>
        <div className="container">
          <div >
            <img src={this.props.allTeams[0].teamLogo} alt="team1"
              width={'175px'}
              height={'85%'} />
            <p style={{ textAlign: "center" }}>{this.props.allTeams[0].teamName}</p>
          </div>
          <div >
            <img src={this.props.allTeams[1].teamLogo} alt="team2"
              width={'175px'}
              height={'85%'} />
            <p style={{ textAlign: "center" }}>{this.props.allTeams[1].teamName}</p>

          </div>
          <div >
            <img src={this.props.allTeams[2].teamLogo} alt="team3"
              width={'175px'}
              height={'85%'} />
            <p style={{ textAlign: "center" }}>{this.props.allTeams[2].teamName}</p>
          </div>
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

const mapDispatchToProps = { getCurrentUser, getAllContent, getAllTeams };

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);

