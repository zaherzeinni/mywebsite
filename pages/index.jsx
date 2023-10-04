import React from 'react';
import Link from "next/link";
import { Box,Stack } from '@chakra-ui/react';

const Home = () => {
    return (
        <div >
             <Link href={"/auth/login"}>
                      {/* // inline block {span}  */}
                      <Stack justifyContent={"center"} textAlign={"center"} 
                      minW={"100vw"} 
                      minH={"100vh"}
                      alignContent={"center"}>
                      <span as="span" className="bg-amber-500" 
                      >
                        login
                      </span>
                      </Stack>
                    </Link>
                    
        </div>
    );
}

export default Home;
