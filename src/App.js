import React from 'react';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register'; 
import Login from './components/login/Login';
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

      </Switch>
    </Router>
  );
}

export default App;
