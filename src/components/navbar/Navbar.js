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
            <NavLink className="nav-link" exact to="/movies">
              <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-camera-reels" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z"/>
              <path fill-rule="evenodd" d="M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fill-rule="evenodd" d="M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
              Movies</NavLink>
      </li>
    </ul>

    {/*Right Side Of Navbar*/}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/transactions"><i class="fas fa-money-check-alt fa-2x"></i>Transactions</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" exact to="/booking"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            <path fill-rule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
          </svg>My Booking</NavLink>
        </li>
          
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contacts"><i class="far fa-address-card fa-2x"></i>Contacts</NavLink>
        </li>

          {
            !authUser.isAuth ?
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login"><i className="fas fa-users-cog fa-2x"></i>Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/register"><i class="fas fa-user-plus fa-2x"></i>Register</NavLink>
                </li>
              </>
              :
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout" >
                  <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-box-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
                  Logout</NavLink>
              </li>
          }
          
      </ul>
  </div>
</nav>

  )
}

export default Navbar;