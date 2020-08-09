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
import dust2smokes from '../images/dust2smokes.jpg'

class Newsfeed extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    if (!this.props.currentUser) {
      return <div>Loading...</div>
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
        <p>Trending content for you - <Link>Click here for more!</Link></p>
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=XDCja2ckJCg"
        /> */}
        <img src={dust2smokes} alt="dust2smokes"
          width={'100%'}
          height={'100%'} />
        <br />
        <p>Recommended gamers for you - <Link>Click here for more!</Link></p>
        <div className="smallRecommend">
          <img src={profileIcon1} alt="userRecommend1"
            width={'25%'}
            height={'25%'} />
          <img src={profileIcon2} alt="userRecommend2"
            width={'25%'}
            height={'25%'} />
          <img src={profileIcon3} alt="userRecommend3"
            width={'25%'}
            height={'25%'} />
        </div>
        <p>Rising talent near you - <Link>Click here for more!</Link></p>
        <div className="smallRecommend">
          <img src={profileIcon4} alt="userRecommend4"
            width={'25%'}
            height={'25%'} />
          <img src={profileIcon5} alt="userRecommend5"
            width={'25%'}
            height={'25%'} />
          <img src={profileIcon6} alt="userRecommend6"
            width={'25%'}
            height={'25%'} />
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

