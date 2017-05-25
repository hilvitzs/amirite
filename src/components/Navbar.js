import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

export const Navbar = () => {
  return(
    <section>
      <Route exact path='/News' render={() => {
        <NavLink to='/News' activeClassName='selected'>News</NavLink>
      }} />
    </section>
  )
}
