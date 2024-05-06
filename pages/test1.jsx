import React from 'react';
import {

    Input,
    Center,
    Box,
    Flex,
  } from '@chakra-ui/react'


// search input ta7to box bg blue if search === khaled

//https://redux-toolkit.js.org/



import { useAuth } from '@/functions/context';


  export default function Test1() {
 
const {inputt,setInputt} = useAuth()
  
    return (
      <>
      <Box mt={'300'} ml='800'>
        
        <Box>
        <Input 
        onChange={(e)=>setInputt(e.target.value)}
        
        w={250} />
        </Box>
        {inputt === "khaled" ? 
        <Box bg={'red.400'} w={100} h={100} mt={10} borderRadius={10}>
        &nbsp;
        </Box>  :
        <Box bg={'green.400'} w={100} h={100} mt={10} borderRadius={10}>
        &nbsp;
        </Box>
        }

        </Box>
      </>
    )
  }

