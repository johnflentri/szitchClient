import React from 'react'

import { Link } from "react-router-dom";

import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (<nav className={drawerClasses}>
    <ul>
      <li><Link to={`/notifications`}>Notifications</Link></li>
      <li><Link to={`/logout`}>Account</Link></li>
    </ul>
  </nav>)
}

export default sideDrawer;