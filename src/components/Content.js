import React, { Component } from 'react'
import { connect } from "react-redux";

class Content extends Component {
  render() {
    const mappedContent = this.props.allContent.map(content => (
      <div key={content.id}>
        <div >
          <img src={content.img} alt='contentImg' width={'50%'} height={'50%'}></img>
          {content.title}
        </div>
      </div>
    ))

    console.log("state?", this.props)
    return (
      <div className="centerDefault">
        <h3 className="pageHeading">Content</h3>
        <div>
          {mappedContent}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  allContent: state.content
});

export default connect(mapStateToProps)(Content);

