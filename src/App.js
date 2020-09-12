import React from 'react';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register'; 
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

      </Switch>
    </Router>
  );
}

export default App;
