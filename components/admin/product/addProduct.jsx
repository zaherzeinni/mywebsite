import React from 'react';
import AdminLayout from '../AdminLayout';
import productForm from './productForm';
import { useState } from 'react';
import { db } from '@/functions/firebase';
import { addDoc ,collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useAuth } from '@/functions/context';

const AddProductMain = () => {

const [title,setTitle] = useState("");
const [image1 , setImage1] = useState({url:'' , name:''})
const [image2 , setImage2] = useState({url:'' , name:''})
const [image3 , setImage3] = useState({url:'' , name:''})
const [image4 , setImage4] = useState({url:'' , name:''})
const [image5 , setImage5] = useState({url:'' , name:''})
const [image6 , setImage6] = useState({url:'' , name:''})

const {setPageLoading,pageLoading} = useAuth();

const handleClick = async (e)=> {
    e.preventDefault();
    setPageLoading(true)

    const data = {title:title , image:image}

await addDoc(collection(db, 'cats'), data)

    setPageLoading(false)
    toast.success('Category Uploaded Successfully')
    setTitle('')
    setImage({name:"", url:""})

}


    return (
        <AdminLayout>

        <CategoryForm
       {...{title , setTitle , image , setImage, handleClick}}
       
        />

        </AdminLayout>
    );
}

export default AddProductMain;
