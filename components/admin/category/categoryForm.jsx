<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import {
  getDocuments,
  antdFieldValidation,
} from "@/functions/firebase/getData";
import {
  Button,
  Form,
  Upload,
  message,
  Input,
  Select,
  Switch,
  InputNumber,
} from "antd";
const { TextArea } = Input;
=======
import React from "react";
import  {useState} from 'react';


const CategoryForm = ({ title, setTitle, image, setImage }) => {


    const [file , setFile] = useState('')
>>>>>>> 75f931e (to vscodee)


import Image from "next/image";


const CategoryForm = ({
  onFinish,
  initialValues,
  file,
  setFile,
  isupdate = false,
}) => {
  const [image, setImage] = useState(initialValues?.image || "");


  return (
    <div className=" w-[80%] mx-auto ">
      <div className=" w-full md:w-1/2 border-2 py-6 px-6">
        <Form
          layout="vertical"
          // onFinish same as submit normal form
          onFinish={(values) =>
            // name of our function
            onFinish({
              ...values,
              image,
            })
          }
          initialValues={{
            title: initialValues?.title || "",
            image: initialValues?.image || "",
          }}
        >
          <Form.Item name="title" label="Add Category Title">
            <Input />
          </Form.Item>


          <div className=" grid gap-3 md:grid-cols-4 grid-cols-1">


          {/* -----images upload----- */}

          
        <div className=" my-4">
        
          <div className="w-full flex">
          <Upload>    
            <input
              type="file"
              id="file"
              name=""
              className="text-black font-medium rounded-md border-teal-400 py-3 px-6 border-2 border-r-0 rounded-r-none"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button
              type="button"
              className="rounded-l-none w-[50%]  inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:text-teal-700  focus:outline-none focus:ring active:text-teal-500 "
            //   onClick={uploadImage}
            //
            >
              Upload Image
              </button>
            </Upload>
          </div>
          </div>

          {/* -----show category image {update category} ---- */}


          {image && (
            <div className="  w-24 md:w-24 relative">
              <img className=" w-24 h-24  rounded-lg" src={image} alt="" />


              <p
                onClick={() => setImage("")}
                className="  !text-red-500 cursor-pointer  font-semibold text-center"
              >
                Remove
              </p>
            </div>
          )}


          <div className=" ">
            <Button
              className=" mt-4  block w-1/3 bg-blue-500 mx-auto"
              type="primary"
              htmlType="submit"
            >
              Publish
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};


export default CategoryForm;


