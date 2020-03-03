import React from 'react'
import { Link } from 'react-router-dom'

import MainHeader from '../MainHeader/MainHeader'
import NavLinks from '../NavLinks/NavLinks'
import './MainNavigation.css'

const MainNavigation = props => {
  return (
    <MainHeader>
      <button className='main-navigation__menu-btn'>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className='main-navigation__title'>
        <Link to='/'>Sightseer</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  )
}

export default MainNavigation
