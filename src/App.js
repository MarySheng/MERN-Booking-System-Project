import React, {useState, useEffect} from 'react';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register'; 
import Login from './components/login/Login';
import AddMovie from './components/AddMovies/AddMovie';
import Booking from './components/bookings/Booking';
import Transaction from './components/transactions/Transaction';
import TransactionSingle from './components/transactions/TransactionSingle';
import Movie from './components/Movie';
import ViewDetail from './components/singleView/ViewDetail';
import EditMovie from './components/editMovies/EditMovie';
import Logout from './components/Logout';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import './components/movie.css';
import Contact from './components/contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 


function App() {

  const [authUser, setAuthUser] = useState({
    isAuth: false,
    _id: "",
    fullname: "",
    email: ""
  });

  const [myBooking, setMyBooking] = useState({
        bookings: []
  })
  

   const addToBooking = (id, quantity) => {
    setMyBooking({
      bookings: [
        ...myBooking.bookings,
        {
          movieId: id,
          quantity: quantity
        }
      ]
    })
    }

    //   const removeToBooking = id => {
//     let updatedBookings = myBooking.bookings.filter(booking => booking.movieId !== id)
//     setMyBooking({
//         bookings: updatedBookings 
//       })
//   }



  useEffect(() => {
    let appState = localStorage["appSate"];
    if (appState) {
      fetch("https://booking-movie-backend.herokuapp.com/users/profile", {
        headers: {
          "Authorization" : `Bearer ${appState}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data._id) {
            setAuthUser({
              isAuth: true,
              _id: data._id,
              fullname: data.fullname,
              email: data.email,
              isAdmin: data.isAdmin
            });
          }
        })
    }
  },[])
 

  return (
    < div className="page-container">
      <div className="content-wrap">
    <Router>
      <Navbar authUser={authUser} />
      <Switch>
        {/* Landing Page */}
          <Route exact path='/'>
          <Landing />
        </Route>

        {/* Register */}
        <Route exact path='/register'>
          <Register />
        </Route>

        {/* Login */}
        <Route exact path='/login'>
          <Login authUser={authUser} setAuthUser={setAuthUser} />
        </Route>

        {/* AddMovie */}
        <Route exact path='/create'>
          <AddMovie />
        </Route>

        {/* Movies Catalog */}
        <Route exact path='/movies'>
            <Movie />
        </Route>

        {/* Booking */}
        <Route exact path='/booking'>
          <Booking addToBooking={addToBooking} />
        </Route>

        {/* Transaction */}
        <Route exact path='/transactions'>
          <Transaction />
        </Route>

        {/* Transaction Single */}
        <Route exact path='/transactions/:id'>
          <TransactionSingle />
        </Route>

        {/* Single Movie Detail */}
        <Route exact path='/movies/:id'>
          <ViewDetail />
        </Route>

        {/* Edit Movie */}
        <Route exact path='/movies/:id/edit'>
          <EditMovie />
        </Route>
        
            {/* Logout */}
        <Route exact path='/logout'>
        <Logout setAuthUser={setAuthUser} />
        </Route>
            
      {/* Contact */}
        <Route exact path='/contacts'>
          <Contact />
        </Route>      

         
      </Switch>
    </Router>
    <div>
      <Footer />
      </div>
      </div>
      </div>
  );
}

export default App;
