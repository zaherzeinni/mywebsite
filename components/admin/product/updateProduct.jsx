import React from 'react';
import ProductForm from './productForm';
import AdminLayout from '../AdminLayout';
import { useState } from 'react';
import { useAuth } from '@/functions/context';


const UpdateProduct = ({subcats,cats,product}) => {


    const [files, setFiles] = useState([]);
    const { setPageLoading, pageLoading } = useAuth();
    const isupdate = true;
  
    const onFinish = async (values) => {
      console.log("values-->", values);
  
  
      message.success(`Product Updated Successfully`);
    };
  


    return (
        <AdminLayout>
         <ProductForm 
        //  initialValues all info about product from firestore
         initialValues={product}
         cats={cats}
         subcats={subcats}
         onFinish={onFinish}
         files={files}
         setFiles={setFiles}
         isupdate={isupdate}

         />
        </AdminLayout>
    );
}

export default UpdateProduct;






