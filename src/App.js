import React, { Component } from 'react'
import { Route } from "react-router";
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Toolbar from './components/toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <Route path='/' exact component={Homepage} />
          <Route path='/user/:id' component={Profile} />
        </main>
      </div>
    )
  }
}

export default App
