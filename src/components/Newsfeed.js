import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import ReactPlayer from 'react-player'

import { getCurrentUser } from "../actions";

import profileIcon1 from '../images/profileIcon.svg'
import profileIcon2 from '../images/profileIcon2.png'
import profileIcon3 from '../images/profileIcon3.png'
import profileIcon4 from '../images/profileIcon4.jpg'
import profileIcon5 from '../images/profileIcon5.png'
import profileIcon6 from '../images/profileIcon6.jpg'
import trending1 from '../images/trending1.jpg'
import trending2 from '../images/trending2.jpeg'
import trending3 from '../images/trending3.jpg'
import team1 from '../images/team1.png'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.png'
import Questions from './Questions';

class Newsfeed extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    if (!this.props.currentUser) {
      return <div>Loading...</div>
    } else if (this.props.currentUser.user.newPlayer === true) {
      return (
        <Questions />
      )
    }
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
        <p className="pageHeading">Trending content for you - <Link>more</Link></p>
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=XDCja2ckJCg"
        /> */}
        <div>
          <img src={trending1} alt="trending1"
            width={'100%'}
            height={'100%'} />
          <img src={trending2} alt="trending2"
            width={'50%'}
            height={'50%'} />
          <img src={trending3} alt="trending3"
            width={'50%'}
            height={'50%'} />
        </div>
        <br />
        <br />
        <p className="pageHeading">Popular gamers for you - <Link>more</Link></p>
        <div className="container">
          <div >
            <img src={profileIcon1} alt="userRecommend1"
              width={'100%'}
              height={'85%'}></img>
            <p style={{ textAlign: "center" }}>Player A</p>
          </div>
          <div >
            <img src={profileIcon2} alt="userRecommend2"
              width={'100%'}
              height={'85%'}></img>
            <p style={{ textAlign: "center" }}>Player B</p>
          </div>
          <div >
            <img src={profileIcon3} alt="userRecommend3"
              width={'100%'}
              height={'85%'}></img>
            <p style={{ textAlign: "center" }}>Player C</p>
          </div>
        </div>
        <br />
        <p className="pageHeading">Recommended players near you - <Link>more</Link></p>
        <div className="container">
          <div >
            <img src={profileIcon4} alt="userRecommend4"
              width={'100%'}
              height={'85%'} />
            <p style={{ textAlign: "center" }}>Player D</p>
          </div>
          <div >
            <img src={profileIcon5} alt="userRecommend5"
              width={'100%'}
              height={'85%'} />
            <p style={{ textAlign: "center" }}>Player E</p>
          </div>
          <div >
            <img src={profileIcon6} alt="userRecommend6"
              width={'100%'}
              height={'85%'} />
            <p style={{ textAlign: "center" }}>Player F</p>
          </div>
        </div>
        <br />
        <p className="pageHeading">29 Teams currently looking for a player - <Link>more</Link></p>
        <div className="container">
          <div >
            <img src={team1} alt="team1"
              width={'100%'}
              height={'85%'} />
          </div>
          <div >
            <img src={team2} alt="team2"
              width={'100%'}
              height={'85%'} />
          </div>
          <div >
            <img src={team3} alt="team3"
              width={'100%'}
              height={'85%'} />
          </div>
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);

