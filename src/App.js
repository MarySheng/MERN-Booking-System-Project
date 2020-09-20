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
console.log("authUser=", authUser)
  const [myBooking, setMyBooking] = useState({
        startDate: "",
        bookings: []
  })

  const updateBooking = (booking) => {

    console.log("b1 = ", booking)
    console.log("b2 = ", myBooking)

    const matchedIndex = myBooking.bookings.findIndex(b => 
      b.movieId === booking.movieId
    )

    const newArray = myBooking.bookings
    newArray[matchedIndex].date = booking.date
    newArray[matchedIndex].quantity = booking.quantity
    setMyBooking({
      bookings: newArray
    })
  }
  

   const addToBooking = (id, quantity, name, price, date) => {
    setMyBooking({
      bookings: [
        ...myBooking.bookings,
        {
          name,
          price,
          movieId: id,
          quantity: quantity,
          date
        }
      ]
    })
    }

  const removeToBooking = id => {
    console.log("id = ", id)
    let updatedBookings = myBooking.bookings.filter(booking => booking.movieId !== id)
    console.log("updatedBookings = ", updatedBookings)
    setMyBooking({
        bookings: updatedBookings 
      })
  }

const clearAllBookings = () => {
      setMyBooking({
        bookings: [] 
      })
    }


   useEffect(() => {
    let appState = localStorage["appSate"];
    if (appState) {
      fetch("https://booking-movie-backend.herokuapp.com/users/profile", {
        headers: {
          "Authorization": `Bearer ${appState}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data._id) {
            console.log("data = ", data)
            setAuthUser({
              isAuth: true,
              _id: data.user._id,
              fullname: data.user.fullname,
              email: data.user.email,
              isAdmin: data.user.isAdmin
            });
          }
        })
    }
  },[])
 

  return (
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
            <Movie  authUser={authUser} addToBooking={addToBooking} />
        </Route>

        {/* Booking */}
        <Route exact path='/booking'>
              <Booking myBooking={myBooking} setMyBooking={setMyBooking}  updateBooking={updateBooking} removeToBooking={removeToBooking} clearAllBookings={clearAllBookings}/>
        </Route>

        {/* Transaction */}
        <Route exact path='/transactions'>
          <Transaction />
        </Route>

        {/* Transaction Single */}
        <Route exact path='/transactions/:id'>
          <TransactionSingle authUser={authUser} />
        </Route>

        {/* Single Movie Detail */}
        <Route exact path='/movies/:id'>
          <ViewDetail authUser={authUser}/>
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
  );
}

export default App;
