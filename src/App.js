import React, { Component } from 'react'
import { Route } from "react-router";
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import UserList from './components/UserList';
import Toolbar from './components/toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import LogoutSuccess from './components/LogoutSuccess';
import Events from './components/Events';
import Matches from './components/Matches';
import Friends from './components/Friends';
import EventDetails from './components/EventDetails'
import Questions from './components/Questions';
import Notifications from './components/Notifications';
import Content from './components/Content';
import GamersPopular from './components/GamersPopular';
import GamersNear from './components/GamersNear';

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
        <main>
          <Route path='/' exact component={Homepage} />
          <Route path='/user/:id' component={Profile} />
          <Route path='/userlist' component={UserList} />
          <Route path='/logout' component={LogoutSuccess} />
          <Route path='/events' component={Events} />
          <Route path='/matches' component={Matches} />
          <Route path='/friends' component={Friends} />
          <Route path='/event/:id' component={EventDetails} />
          <Route path='/questions' component={Questions} />
          <Route path='/notifications' component={Notifications} />
          <Route path='/content' component={Content} />
          <Route path='/popular' component={GamersPopular} />
          <Route path='/near' component={GamersNear} />
        </main>
      </div>
    )
  }
}

export default App
