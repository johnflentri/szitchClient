import React, { Component } from 'react'
import { connect } from "react-redux";
import { getCurrentUser } from "../actions";
import { Link } from "react-router-dom";

class UserList extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    if (!this.props.userList) {
      return <div>Loading...</div>
    }

    const { userList } = this.props

    const { params } = this.props

    const mappedUsers = userList.map(userProfile => (
      <div key={userProfile.id}>
        <ul>
          <Link to={`/user/${userProfile.id}`}>{userProfile.username} </Link>
        </ul>
      </div>
    ))

    const findUser = userList.find(user => user.id === parseInt(params))

    const overallRankComparison = () => {
      if (parseFloat(findUser.overallRank) > parseFloat(this.props.overallRankVs)) {
        return <p><span style={{ color: "green" }}>{this.props.overallRankVs}/{this.props.userList.length}</span> Overall Rank <span style={{ color: "red" }}>{findUser.overallRank}/{this.props.userList.length}</span></p>
      } else if (parseFloat(findUser.overallRank) < parseFloat(this.props.overallRankVs)) {
        return <p><span style={{ color: "red" }}>{this.props.overallRankVs}/{this.props.userList.length}</span> Overall Rank <span style={{ color: "green" }}>{findUser.overallRank}/{this.props.userList.length}</span></p>
      } else {
        return <p><span style={{ color: "green" }}>{this.props.overallRankVs}/{this.props.userList.length}</span> Overall Rank <span style={{ color: "green" }}>{findUser.overallRank}/{this.props.userList.length}</span></p>
      }
    }

    const accuracyComparison = () => {
      if (findUser.accuracyPercent < this.props.accuracyPercentVs) {
        return <p><span style={{ color: "green" }}>{this.props.accuracyPercentVs}%</span> Accuracy <span style={{ color: "red" }}>{findUser.accuracyPercent}%</span></p>
      } else if (findUser.accuracyPercent > this.props.accuracyPercentVs) {
        return <p><span style={{ color: "red" }}>{this.props.accuracyPercentVs}%</span> Accuracy <span style={{ color: "green" }}>{findUser.accuracyPercent}%</span></p>
      } else {
        return <p><span style={{ color: "green" }}>{this.props.accuracyPercentVs}%</span> Accuracy <span style={{ color: "green" }}>{findUser.accuracyPercent}%</span></p>
      }
    }

    const killDeathRatioComparison = () => {
      if (parseFloat(findUser.killDeathRatio) < parseFloat(this.props.killDeathRatioVs)) {
        return <p><span style={{ color: "green" }}>{this.props.killDeathRatioVs}</span> K/D Ratio <span style={{ color: "red" }}>{findUser.killDeathRatio}</span></p>
      } else if (parseFloat(findUser.killDeathRatio) > parseFloat(this.props.killDeathRatioVs)) {
        return <p><span style={{ color: "red" }}>{this.props.killDeathRatioVs}</span> K/D Ratio <span style={{ color: "green" }}>{findUser.killDeathRatio}</span></p>
      } else {
        return <p><span style={{ color: "green" }}>{this.props.killDeathRatioVs}</span> K/D Ratio <span style={{ color: "green" }}>{findUser.killDeathRatio}</span></p>
      }
    }

    return (
      <div className="centerDefault">
        <h3 className="pageHeading">1v1</h3>
        <div className="centerSimple">
          <img style={{ height: "100px", width: "100px" }} src={this.props.currentProfileAvatar} alt="User Avatar" />
          <img style={{ height: "100px", width: "100px" }} src={findUser.avatarURL} alt="User Avatar" />
        </div>
        <p className="centerSimple">{this.props.gamerTagVs} v {findUser.username}</p>
        <p className="centerSimple">{overallRankComparison()}</p>
        <p className="centerSimple">{accuracyComparison()}</p>
        <p className="centerSimple">{killDeathRatioComparison()}</p>
        <div className="centerDefault">
          <p className="pageHeading">Click to compare!</p>
          <div className="searchForm">
            <form>
              <input type="text" id="filter" placeholder="Search..." />
              <button>Go!</button>
            </form>
          </div>
          {mappedUsers}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userList: state.user.currentUser.users
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);