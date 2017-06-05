import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <section className='navlink-container'>
      <NavLink className='navlink' to='/news' activeClassName='selected'>News</NavLink>
      <NavLink className='navlink' to='/submitQuestion' activeClassName='selected'>Submit Question</NavLink>
      <NavLink className='navlink' to='/questions' activeClassName='selected'>Questions</NavLink>
    </section>
  )
}

export default Navbar;
