import React from 'react';
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
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 


function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
        {/* Register */}
        <Route path='/register'>
          <Register />
        </Route>

        {/* Login */}
        <Route path='/login'>
          <Login />
        </Route>

        {/* AddMovie */}
        <Route path='/create'>
          <AddMovie />
        </Route>

        {/* Movies Ctalog */}
        <Route exact path='/'>
            <Movie />
        </Route>

        {/* Booking */}
        <Route path='/booking'>
          <Booking />
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
        

      </Switch>
    </Router>
  );
}

export default App;
