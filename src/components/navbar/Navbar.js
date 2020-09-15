import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';

const Navbar = ({authUser}) => {
  // const Navbar = (props) => {

  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink id="icon" className="navbar-brand" exact to="/">
        <img src="https://www.iconfinder.com/data/icons/cat-7/512/cat_sticker_emoji_emoticon_popcorn_movie-512.png" />
      </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
          {/*Admin Dropdown*/}
          {/* {
            authUser.isAdmin ? */}
              <li className="nav-item">
         
                <NavLink exact to='/create' className="nav-link">Add Movie</NavLink>

              </li>
              {/* : ""
          } */}

            
          

                 
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/movies">Movies</NavLink>
      </li>
    </ul>

    {/*Right Side Of Navbar*/}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/transactions">Transactions</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" exact to="/booking">My Booking</NavLink>
        </li>
          
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contacts">Contacts</NavLink>
        </li>

          {
            !authUser.isAuth ?
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login"><i className="fas fa-users-cog fa-2x"></i>Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/register">Register</NavLink>
                </li>
              </>
              :
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout" >Logout</NavLink>
              </li>
          }
          
      </ul>
  </div>
</nav>

  )
}

export default Navbar;