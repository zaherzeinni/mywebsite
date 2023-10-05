import React from 'react';
import Link from "next/link";
import { Box,Stack } from '@chakra-ui/react';

const Home = () => {
    return (
        <Box justifyContent={"center"} textAlign={"center"} 
        minW={"100vw"} 
        minH={"100vh"}
        alignContent={"center"}
        align="center"
        justify="center"
        >
             <Link href={"/auth/register"}>
                      {/* // inline block {span}  */}
                      <Stack >
                      <span as="span" className="bg-amber-500" 
                      >
                        Register Page
                      </span>
                      </Stack>  
                      </Link>
                      <Stack>
                      <Link href={"/Cards"}>
                      <span as="span" className="bg-amber-500" 
                      >
                        Open Page Cards Design
                      </span>
                    </Link>
                    </Stack>
                    
        </Box>
    );
}

export default Home;
