import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';

// const Navbar = ({authUser}) => {
const Navbar = (props) => {

  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Movie Time</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
        {/*Admin Dropdown*/}

           {/* { */}
                {/* // authUser.isAdmin ? */}
            <li className="nav-item dropdown">
              <a 
                id="adminDropdown" 
                href="" 
                className="nav-link dropdown-toggle" 
                role="button" 
                data-toggle="dropdown">Admin</a>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/add">Add Movie</NavLink>
                </div>
            </li>
            {/* //   : ""
            // } */}
                       
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Movies</NavLink>
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

        {/* { */}
        {/* //   !authUser.isAuth ? */}
          <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/register">Register</NavLink>
          </li>
          </>
          {/* : */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout" >Logout</NavLink>
          </li>
        {/* } */}
      </ul>
  </div>
</nav>

  )
}

export default Navbar;