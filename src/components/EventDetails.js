import React, { Component } from 'react'
import { connect } from "react-redux";
import { getEvents } from '../actions'
import { Link } from "react-router-dom";

class EventDetails extends Component {
  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    const thisEvent = this.props.events.find(event => event.id === parseInt(this.props.match.params.id))
    return (
      <div className="centerDefault">
        <div className="pageHeading">
          <img src={thisEvent.logo} alt="Event Logo" />
          <h4>{thisEvent.organisation}</h4>
          <div className="container">
            <p>{thisEvent.eventName}</p>
            <p>{thisEvent.date}</p>
          </div>
          <h5 className="pageHeading">Prize pool</h5>
          <div className="container">
            <p>1st - {thisEvent.prize1}</p>
            <p>2nd - {thisEvent.prize2}</p>
            <p>3rd - {thisEvent.prize3}</p>
          </div>
          <p>17 Teams have confirmed their place in this event - <Link>browse competitors!</Link></p>
          <p style={{ color: "green" }}>3 places left!</p>
          <button className="pageHeading" >JOIN</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.event,
});

const mapDispatchToProps = { getEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
