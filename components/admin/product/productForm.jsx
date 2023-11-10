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


import Image from "next/image";


const ProductForm = ({
  onFinish,
  initialValues,
  files,
  setFiles,
  cats,
  subcats,
  isupdate = false,
}) => {
  const [images, setImages] = useState(initialValues?.images || []);


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
              images,
            })
          }
          initialValues={{
            title: initialValues?.title || "",
            category: initialValues?.category || "",
            subcategory: initialValues?.subcategory || "",
            price: initialValues?.price || 0,
            desc: initialValues?.desc || "",
            instock: initialValues?.instock || true,
            images: initialValues?.images || [],
          }}
        >
          <Form.Item name="title" label="Title">
            <Input />
          </Form.Item>


          <Form.Item name="desc" label="Description">
            <TextArea rows={4} />
          </Form.Item>


          <div className=" grid gap-3 md:grid-cols-4 grid-cols-1">
            {/* -----category--- */}
            <Form.Item name="category" label="category">
              <Select placeholder="Select Category">
                {cats?.map((category) => {
                  return (
                    <Select.Option key={category?.id} value={category?.title}>
                      {category?.title}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>


            {/* -----subcategory--- */}
            <Form.Item name="subcategory" label="subcategory">
              <Select placeholder="Select SubCategory">
                {subcats?.map((subcat) => {
                  return (
                    <Select.Option key={subcat?.id} value={subcat?.title}>
                      {subcat?.title}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>


            <div className=" flex  md:col-span-2 gap-2 items-center justify-center md:justify-start">
              {/* ----Price--- */}


              <Form.Item name="price" label="Price">
                <InputNumber min={0} />
              </Form.Item>


              {/* ----InStock----- */}


              <Form.Item name="instock" label="InStock">


                <Switch
                // checked="true"
                defaultChecked
               
                className=" bg-red-400 " />
              </Form.Item>
            </div>
          </div>


          {/* -----images upload----- */}


          <div>
            <Upload
              accept="image/*"
              multiple
              // files is data of images will be uploaded to firebase/storage
              beforeUpload={(file) => {
                setFiles((prev) => [...prev, file]);
                return false;
              }}
              listType="picture-card"
            >
              Upload Images
            </Upload>
          </div>


          {/* -----show product images {update product} ---- */}


          {images?.length}
          <div className="flex flex-wrap gap-3 mt-2 ">
            {images?.map((data, index) => (
              <div key={index}>
                <img src={data} className="w-20 h-20 rounded-full " />
                <h1
                  onClick={() => {
                    // prev all previous images
                    setImages((prev) => {
                      // all images put into new array
                      const temp = [...prev];
                      // delete  image with clicked index
                      temp.splice(index, 1);
                      // return this new array after delete clicked image
                      return temp;
                    });
                  }}
                  className="text-center cursor-pointer text-red-600"
                >
                 
                  remove
                </h1>
              </div>
            ))}
          </div>


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


export default ProductForm;


