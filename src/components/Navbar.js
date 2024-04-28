import React from 'react'
import {Link} from 'react-router-dom';
import { Box,Stack,Typography,Button } from '@mui/material'
import Logo from "../assets/images/sai.png"
const Navbar = () => {
  return (
    <Stack
    direction='row'
    justifyContent='space-around'
    sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} 
    px="20px"
    >
      <Link to="/">
         <Typography color="#000080" fontWeight="600" fontSize="26px"  mt={4} >
            Fit-Streak
         </Typography>
      </Link>


      <Stack
      direction='row'
      gap='70px'
      fontSize='24px'
      alignItems='flex-end'
      >
      <Link to="/"  style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #000080'}}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      <Link to="/"  style={{ textDecoration: 'none', color: '#3A1212' }}>Features</Link>
      <Link to="/"  style={{ textDecoration: 'none', color: '#3A1212'}}>About</Link>
      </Stack>
    </Stack>
  )
}

export default Navbar