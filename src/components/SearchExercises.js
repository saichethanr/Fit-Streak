import React , {useEffect,useState} from 'react'
import { Box,Button,Stack,TextField,Typography } from '@mui/material'
const SearchExercises = () => {
   const[search,setSearch] = useState('')
   

   //async simply means that thhis function is going take some time
   const handleSearch = async() =>{
      if(search){
        //this fetch data function is located in someother file lets implement it 
        // const exerciseData = await fetchData();
      }
   }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
         <Typography fontFamily="" fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}}
         mb="50px" textAlign="center"
         >
          Awesome Exwercises You should <br/>
                 Know
         </Typography>

         <Box position="relative" mb="72px">
              <TextField
              
              sx={{
                input:{
                  fontWeight : '700',
                  border:'none',
                  borderRadius:'4px'
                },

                width:{
                  lg:'1070px',
                  xs:'350px'
                },

                backgroundColor:'#fff',
                borderRadius:'40px'
              }}
              height="76px"
              value={search}
              //empty call back function
              onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
              placeholder='search Exersises'
              type='text'

              >
              </TextField>
              <Button className='search-btn'
               sx={{
                bgcolor:'#FF2625',
                color:'#fff',
                textTransform:'none',
                width:{
                  lg:'175px',
                  xs:'80px'
                },
                fontSize:{
                  lg:'20px',
                  xs:'14px'
                },
                height:'56px',
                position:"absolute",
                right:'0'
               }}

               onClick={handleSearch}
              >
                Search
              </Button>
         </Box>

    </Stack>
  )
}

export default SearchExercises