import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { getCurrentUser } from "../actions";
import { connect } from "react-redux";

class Matches extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="centerDefault">
        <div className="page_navigation-items">
          <ul>
            <li><Link to={`/`}>Explore</Link></li>
            <li><Link to={`/user/${this.props.currentUser.user.id}`}>Profile</Link></li>
            <li><Link to={`/events`}>Events</Link></li>
            <li><Link to={`/matches`}>Matches</Link></li>
            <li><Link to={`/streams`}>Streams</Link></li>
          </ul>
        </div>
        <h3 className="pageHeading">
          Matches
        </h3>
        <div className="centerDefault">
          LIVE NOW!
        <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - Team Liquid vs. Vitality - Mirage - EU Pro League</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - NaVi vs. Astralis - Dust - ESL One Cologne</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - G2 Esports vs. Renegades - Inferno - DreamHack</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - Fnatic vs. EnVyUs - Inferno - Benelux Premier Division</a></li>
          </ul>
        </div>
        <div className="centerDefault">
          August, 2020
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - Team Liquid vs. Vitality - Mirage - EU Pro League</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - NaVi vs. Astralis - Dust - ESL One Cologne</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - G2 Esports vs. Renegades - Inferno - DreamHack</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - Fnatic vs. EnVyUs - Inferno - Benelux Premier Division</a></li>
          </ul>
        </div>
        <div className="centerDefault">
          July, 2020
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - Team Liquid vs. Vitality - Mirage - EU Pro League</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - NaVi vs. Astralis - Dust - ESL One Cologne</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - G2 Esports vs. Renegades - Inferno - DreamHack</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - Fnatic vs. EnVyUs - Inferno - Benelux Premier Division</a></li>
          </ul>
        </div>
        <div className="centerDefault">
          June, 2020
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - Team Liquid vs. Vitality - Mirage - EU Pro League</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - NaVi vs. Astralis - Dust - ESL One Cologne</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - G2 Esports vs. Renegades - Inferno - DreamHack</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=yeeNXQAJHI8">CS:GO - Fnatic vs. EnVyUs - Inferno - Benelux Premier Division</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
