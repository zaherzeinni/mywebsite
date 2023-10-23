// https://shop-nest-app.netlify.app/

import React, { useState } from 'react';
import { Input,Box,Button ,Stack} from '@chakra-ui/react';

import AdminLayout from '@/components/admin/AdminLayout';
const Add = () => {


    const [inputValue, setInputValue] = useState('');
    const [showValue, setShowValue] = useState('');

    
    const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("handlerinput", handleInputChange)
    };

    const showInput = () => {
    setShowValue(inputValue);
    console.log("show value", inputValue,showInput);
    };

    return (
        <div className=' bg-cyan-600  text-white h-[100vh] justify-center items-center flex'>
            
            {/* <AdminLayout> */}
            <Stack  >
            <Box>
            Type here :  
            
            <Button onClick={showInput}>Show me </Button>
            </Box>
            <Box>
               
            <Input _hover={{border: "1px solid orange"}} border="1px solid yellow"
            placeHolder="insert any text"
            focusBorderColor='pink.400'
            w={"300px"}
            onChange={handleInputChange}
            value={inputValue}

            ></Input>
            
            </Box>
            
            <Box>
            
            
        


            <submit>
                Submit</submit>
               

            
            </Box>
            </Stack>
            {/* </AdminLayout> */}
        </div>
    );
}

export default Add;
