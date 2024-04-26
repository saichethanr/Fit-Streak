import React from 'react'
import './App.css';
// this is used for routing between diffrent pages
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import  Home  from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    // making the box respomsive
    <Box width="400" sx={{ width : {x1:'1488px'}}} m="auto">
       <Navbar/>
       <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/exercise/:id" element = {<ExerciseDetail/>}/>
       </Routes>
       <Footer/>
    </Box>
  )
}

export default App