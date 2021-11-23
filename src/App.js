import './App.css';
import React from 'react'
import About from './About'
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import Home from './Home'
import Nimadir from './nimadir'


import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App" >
      <h1>Hello</h1>
      {/* <Router>
        <Link to='home'>Home</Link>
        <Link to='about'>About</Link>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/user/:username' element={<User />} />
        </Routes>
      </Router> */}
      <Home />
      <Nimadir />
      
    </div>
  );
}

export default App;
