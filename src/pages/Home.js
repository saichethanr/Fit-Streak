import React ,{useState} from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'
const Home = () => {
  const[exercise,setExercises] = useState('all');
  const[bodyPart,setBodyPart] = useState([]);
  // both exercise ans setexercise share the same state
  return (
    <Box>
      <HeroBanner/>
       
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home