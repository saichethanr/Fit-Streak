import React from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'
import Hero from '../assets/images/ban.png'
//typogrphy is just a text element with aditional styles
const HeroBanner = () => {
  return (
    <Box  sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#000080" fontWeight="600" fontSize="26px" marginLeft={26.5}>
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" marginLeft={26.5 } marginBottom={3}>
          Sweat , Smile  Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={4} marginLeft={26.5  }>
          Checkout the most effective Exercises
        </Typography>
        <Button variant='contained'  href='#exercises' style={{ marginLeft: '210px',height:'56px',bgcolor:'#FF2625'}} >
            Explore Exercises
        </Button>
        <Typography 
        fontWeight={600}
        color='#000080'
        sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}
        marginLeft={20}
        >
         Exercises
        </Typography>
        <img src={Hero} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner