import React, { useState } from 'react';
import AdminLayout from '../AdminLayout';
import CategoryForm from './categoryForm';

const AddCategoryMain = () => {

const [title,setTitle] = useState("");
const [image , setImage] = useState({url:'' , name:''})




    return (
        <AdminLayout>

        <CategoryForm
       {...{title , setTitle , image , setImage}}
       
        />

        </AdminLayout>
    );
}

export default AddCategoryMain;
