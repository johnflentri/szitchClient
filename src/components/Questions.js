import React, { Component } from 'react'

export default class Questions extends Component {
  render() {
    return (
      <div className="centerDefault">
        <h3 className="pageHeading">Welcome to Szitch!</h3>
        <h4 className="pageHeading">To help us understand our community, please take 15 seconds to tick some boxes!</h4>
        <div className="centerDefault">
          <h4 className="pageHeading">Would you be interested in creating a team and competing in local tournaments?</h4>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Yes</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>No</p>
        </div>
        <div>
          <div className="container">
            <div className="centerDefault">
              <h4 className="pageHeading">What can we offer that is of most value to you?</h4>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Customized Gaming Profile</p>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Find better teams and players</p>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Road to Global</p>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Quality content</p>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Sponsorship opportunities</p>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Fun way to explore Esports</p>
            </div>
            <div className="centerDefault">
              <h4 className="pageHeading">Which game would you like to see on Szitch next?</h4>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Valorant</p>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>League of Legends</p>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Fortnite</p>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Call of Duty</p>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Overwatch</p>
              <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>I only play CSGO</p>
            </div>
          </div>
          <div className="container">
            <form>
              <h4 className="pageHeading">Want to add something?</h4>
              <textarea className="feedbackText" placeholder="Type your thoughts here..." />
            </form>
          </div>
        </div>
        <button className="centerButton">Submit</button>
      </div>
    )
  }
}
