import React from 'react';
import Link from "next/link";
import { Box,Stack,Button } from '@chakra-ui/react';

const Home = () => {
    return (
        <Box className="flex justify-center  items-center h-[100vh] "
    
        >
             <Link href={"/auth/register"}>
                      {/* // inline block {span}  */}
                      <Stack >
                      <span as="span"  
                      >
                        <Button>
                        Register Page
                        </Button>
                      </span>
                      </Stack>  
                      </Link>
                      <Stack>
                      <Link href={"/Cards"}>
                      <span as="span"
                      >
                        <Button>
                        Cards 
                        </Button>
                      </span>
                    </Link>
                      <Link href={"/"}>
                      <span as="span"
                      >
                        <Button>
                        Sign Out
                        </Button>
                      </span>
                    </Link>
                      <Link href={"/auth/login"}>
                      <span as="span"
                      >
                        <Button>
                        Log In
                        </Button>
                      </span>
                    </Link>
                    </Stack>
                    
        </Box>
    );
}

export default Home;
