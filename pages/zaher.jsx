import React from 'react';
import { Button,Box ,Flex} from '@chakra-ui/react';
const Navbar = ({...rest}) => {
    return (
        <Flex {...rest}>
        <div className='flex flex-row  mt-8 bg-gray-200 p-4 rounded-full w-5/6 m-auto  '>
            <div className='text-xl flex flex-row font-bold space-x-2'>
                <div>
                    <img src='https://clear-link-bay.vercel.app/_next/static/media/logo.671288df.svg' />
                </div>
                <div>
                ClearLink.
                </div>
            </div>
            
            <div className=' justify-center flex flex-row m-auto space-x-20 text-lg   font-semibold'>
            <span>Products</span>
            <span>Solutions</span>
            <span>Resources</span>
            <span>Pricing</span>
            </div>
            
            <Box className=' space-x-2'>
<Button className='bg-white rounded-full  border-sold border-gray-400 border-2 ' >Talk to sales</Button>
<Button className='bg-blue-600 text-white rounded-full hover:bg-blue-500'>Sign up for free</Button>
            </Box>

        </div>
        </Flex>
    );
}

export default Navbar;



