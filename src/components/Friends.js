import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { getCurrentUser } from "../actions";
import { connect } from "react-redux";

class Friends extends Component {
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
            <li><Link to={`/friends`}>Friends</Link></li>
          </ul>
        </div>
        <h3 className="pageHeading">Friends</h3>
        <div className="centerDefault">
          <h4 className="pageHeading">Team Maker</h4>
          <h5 className="pageHeading">CoolestTeamEver</h5>
          <div className="container">
            <p style={{ color: "blue" }}>{this.props.currentUser.user.username}</p>
            <p>Player 2</p>
            <p>Player 3</p>
            <p>Player 4</p>
            <p>Player 5</p>
          </div>
          <br />
          <p className="pageHeading">Rank: Silver</p>
          <p className="pageHeading">Time: 19:00 CEST</p>
          <p className="pageHeading">Maps: All</p>
          <button className="centerButton">Confirm</button>
        </div>
        <div className="centerDefault">
          <h4 className="pageHeading">Friends looking to play today</h4>
          <div className="searchForm">
            <form>
              <input type="text" id="filter" placeholder="Search..." />
              <button>Go!</button>
            </form>
          </div>
          <br />
          <p>Player X (available 19:00-21:00) <button style={{ color: "blue" }}>invite</button></p>
          <p>Player X (available 18:00-18:45) <button style={{ color: "blue" }}>invite</button></p>
          <p>Player X (available 16:00-20:00) <button style={{ color: "blue" }}>invite</button></p>
        </div>
        <div className="centerDefault">
          <h4 className="pageHeading">All</h4>
          <div className="searchForm">
            <form>
              <input type="text" id="filter" placeholder="Search..." />
              <button>Go!</button>
            </form>
          </div>
          <p>Player X <button style={{ color: "blue" }}>invite</button></p>
          <p>Player X <button style={{ color: "blue" }}>invite</button></p>
          <p>Player X <button style={{ color: "blue" }}>invite</button></p>
          <p>Player X <button style={{ color: "blue" }}>invite</button></p>
          <p>Player X <button style={{ color: "blue" }}>invite</button></p>
          <p>Player X <button style={{ color: "blue" }}>invite</button></p>
        </div>
        <div className="centerDefault">
          <h4 className="pageHeading">Mutual connections</h4>
          <div className="searchForm">
            <form>
              <input type="text" id="filter" placeholder="Search..." />
              <button>Go!</button>
            </form>
          </div>
          <p>Player X <button style={{ color: "blue" }}>add</button></p>
          <p>Player X <button style={{ color: "blue" }}>add</button></p>
          <p>Player X <button style={{ color: "blue" }}>add</button></p>
          <p>Player X <button style={{ color: "blue" }}>add</button></p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Friends);

