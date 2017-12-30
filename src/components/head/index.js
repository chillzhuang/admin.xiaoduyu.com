import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import CSSModules from 'react-css-modules'
import styles from './style.scss'

export class Head extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
        <ul styleName="head">
          <li><NavLink exact to="/">Home1333333555</NavLink></li>
          <li><NavLink exact to="/posts">Posts</NavLink></li>
          <li><NavLink exact to="/topics">Topics</NavLink></li>
        </ul>
      )
  }

}

Head = CSSModules(Head, styles)

export default Head
