import React, { useState, useEffect } from "react";
import {
  getDocuments,
  antdFieldValidation,
} from "@/functions/firebase/getData";
import { Button, Form, Upload, message, Input } from "antd";


import Image from "next/image";


import { Select } from "antd";


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
          onFinish={(values) =>
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
          }}
        >
          <Form.Item name="title " label="Title">
            <Input />
          </Form.Item>


<Form.Item>
   
   <Select>


              {cats?.map((category) => {
                return (
                  <Select.Option key={category?.id} value={category?.title}>
                    {category?.title}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>










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