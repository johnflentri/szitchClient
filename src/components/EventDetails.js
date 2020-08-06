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
          <h4>{thisEvent.organisation} {thisEvent.eventName} - {thisEvent.region}</h4>
          <p>{thisEvent.date}</p>
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
