import React, { Component } from 'react'

export default class Questions extends Component {
  render() {
    return (
      <div className="centerDefault">
        <h3 className="pageHeading">Questions</h3>
        <h4 className="pageHeading">To help us understand our community, please take 20 seconds to tick some boxes!</h4>
        <div className="centerDefault">
          <h4 className="pageHeading">What would you rather be?</h4>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Professional Esports player</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Professional Streamer</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Both</p>
        </div>
        <div className="centerDefault">
          <h4 className="pageHeading">Which of these names do you recognise?</h4>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Dr Disrespect</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Ninja</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>KennyS</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>DreamHack</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Tracer</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>FaZe</p>
        </div>
        <div className="centerDefault">
          <h4 className="pageHeading">Which of these is most like you?</h4>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Casual gamer - I play for fun</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Competitive gamer - I play for fun, but I always want to improve</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Casual Streamer</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Competitive Streamer</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Pro</p>
        </div>
        <div className="centerDefault">
          <h4 className="pageHeading">Who do you play with?</h4>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>By myself</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>With friends</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Both</p>
        </div>
        <div className="centerDefault">
          <h4 className="pageHeading">Which do you prefer?</h4>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>PC</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Console</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Both</p>
        </div>
        <div className="centerDefault">
          <h4 className="pageHeading">Which game would you like to see on Szitch next?</h4>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Valorant</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>LoL</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Fortnite</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Call of Duty</p>
          <p><input type="checkbox" id="myCheck" onclick="myFunction()"></input>Overwatch</p>
        </div>
        <div>
          <button className="centerButton">Submit</button>
        </div>
      </div>
    )
  }
}
