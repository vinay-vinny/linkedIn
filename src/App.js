import React from 'react';
import {BrowserRouter as Switch, Router, Route, Link} from 'react-router-dom';
import Signup from './compoonents/Signup';
 import Navbar from './compoonents/Navbar';


function App() {
  return(
    <div className='App'>
      <header className='App-header'>
      <Navbar />
        <Signup />
        
      </header>
    </div>
  );
}

export default App;
