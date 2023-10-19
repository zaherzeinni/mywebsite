import React from 'react';
import AdminLayout from '../AdminLayout';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
  } from '@chakra-ui/react'

const AddCategoryMain = () => {
    return (
        <AdminLayout>
<FormControl isRequired w={500}>
  <FormLabel>Title</FormLabel>
  <Input placeholder='' />



  <FormLabel>Description</FormLabel>
  <Input placeholder='' />

  <FormLabel>Upload Image or Video</FormLabel>
  <Input placeholder='' />

<Button mt="3">Upload</Button>

</FormControl>


        </AdminLayout>
    );
}

export default AddCategoryMain;
