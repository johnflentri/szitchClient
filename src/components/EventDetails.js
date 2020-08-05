import React, { Component } from 'react'
import { connect } from "react-redux";
import { getEvents } from '../actions'

class EventDetails extends Component {
  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    const thisEvent = this.props.events.find(event => event.id === parseInt(this.props.match.params.id))
    return (
      <div className="pageHeading">
        <img src={thisEvent.logo} alt="Event Logo" />
        <p>{thisEvent.organisation}</p>
        <p>{thisEvent.eventName}</p>
        <p>{thisEvent.region}</p>
        <p>{thisEvent.date}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.event,
});

const mapDispatchToProps = { getEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
