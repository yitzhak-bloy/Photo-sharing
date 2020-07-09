import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'
import './MainNavigation.css';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerhandler = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawerhandler = () => {
    setDrawerIsOpen(false)
  }

  return (
    <>
    {drawerIsOpen && <Backdrop onClick={closeDrawerhandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerhandler} >
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button onClick={openDrawerhandler} >
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/' >YourPlaces</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation;