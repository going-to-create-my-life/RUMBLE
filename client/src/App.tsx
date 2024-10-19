import React from 'react';
import SideBar from './components/SideBar';
import MainDashboard from './components/MainDashboard';
import image from './image.png'
import IntroPage from './components/IntroPage/IntroPage';
import Navbar from './components/Navbar';
import MainLanding from './components/MainLanding/MainLanding'
import {Routes , Route } from "react-router-dom" 
import Login from './components/Login';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IntroPage/> } /> 
        <Route path="/home" element={ <><Navbar/> <MainLanding/></> } /> 
      </Routes>
    </div>
  );
};

export default App;
