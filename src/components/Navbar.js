import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <section>
      <NavLink to='/news' activeClassName='selected'>News</NavLink>
      <NavLink to='/submitQuestion' activeClassName='selected'>Submit Question</NavLink>
    </section>
  )
}

export default Navbar;
