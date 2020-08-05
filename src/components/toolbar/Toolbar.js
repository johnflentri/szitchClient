import React from 'react'

import { Link } from "react-router-dom";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><Link to={`/`}>Szitch</Link></div>
      <div className="spacer"></div>
      <div className="searchForm">
        <form>
          <input type="text" id="filter" placeholder="Search..." />
          <button>Go!</button>
        </form>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><Link to={`/questions`}>Questions</Link></li>
          <li><Link to={`/logout`}>LogOut</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar