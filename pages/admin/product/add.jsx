import React, { useState } from 'react';
import { Input,Box,Button } from '@chakra-ui/react';

import AdminLayout from '@/components/admin/AdminLayout';
const Add = () => {

    const [title,setTitle] = useState('');

    const handleClick = () => {title}

    return (
        <div className=' bg-cyan-600  text-white h-[100vh] justify-center items-center flex'>
            
            {/* <AdminLayout> */}
            <Box display={'table-column'} >
            <Box>
            Type Anything:
            </Box>
            <Box>
               
            <Input _hover={{border: "1px solid orange"}} border="1px solid yellow"
            placeHolder="insert any text"
            focusBorderColor='pink.400'
            onChange={(e)=>setTitle(e.target.value)}
            w={"300px"}
           

            ></Input>
            
            </Box>
            
            <Box>
            {/* y
             */}
            <Button  onClick={title}>


            <submit>
                Submit</submit>
                </Button>

            
            </Box>
            </Box>
            {/* </AdminLayout> */}
        </div>
    );
}

export default AddProductPage;


// serverside
AddProductPage.getInitialProps = async (context) => {
    const SubCategories = await getDocuments("subcats"); //  []
    const Categories = await getDocuments("cats"); //  []
  
    console.log("data SubCats💡", SubCategories);
    console.log("data Cats💡", Categories);
  
    return {
      // props from serverside will go to props in clientside
      subcats: SubCategories,
      cats: Categories,
    };
  };
  