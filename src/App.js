import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Description from './components/Description';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
       <div>
         <NavBar />
         <Routes>
           <Route exact ={true} path="/" element ={<Home/>} />
           <Route exact ={true} path="/Login" element ={<Login/>} />
           <Route exact ={true} path="/Profile" element ={<Profile/>} />
           <Route exact ={true} path="/Description" element ={<Description/>} />
           <Route exact ={true} path="/Contact" element ={<Contact/>} />
         </Routes>
       </div>
    </Router>
  );
}

export default App;

