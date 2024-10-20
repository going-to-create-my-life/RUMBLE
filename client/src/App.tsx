import React from 'react';
import SideBar from './components/SideBar';
import MainDashboard from './components/MainDashboard';
import image from './image.png'
import IntroPage from './components/IntroPage/IntroPage';
import Navbar from './components/Navbar';
import MainLanding from './components/MainLanding/MainLanding'
import Dashboard from './components/Dashboard/Dashboard';
import {Routes , Route } from "react-router-dom" 
import Login from './components/Login';
import GamePage from './components/GamePage/GamePage';
import HistoryComponent from './components/HistoryComponent/HistoryComponent';
import Codeium from './components/Codeium/Codeium';
import Loading from './components/Loading/Loading';

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<IntroPage/> } /> 
      <Route path="/dashboard" element={<Dashboard/> } /> 
      <Route path="/home" element={ <><Navbar/><MainLanding/></> } /> 
      <Route path="/gamepage" element={<GamePage/> } />
      <Route path="/history" element={<HistoryComponent />} />
      <Route path="/loading" element={<Loading />} />
      </Routes>
    </div>
  );
};

export default App;
