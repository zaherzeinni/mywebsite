import React from "react";
import  {useState} from 'react';


const CategoryForm = ({ title, setTitle, image, setImage }) => {


    const [file , setFile] = useState('')






  return (
    <div>
        <div className="w-full  p-4">


       
      <div className="w-[70%] md:!w-[40%] ">


        <div className="   ">
          <p className=" mb-2  font-semibold">Category title</p>
          <input
            className="w-full border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6"
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>


        <div className=" my-4">
          <div className="w-full flex">
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
            ///   onClick={uploadImage}
            >
              Upload Image
            </button>
          </div>


          <div className="text-xl font-cutiveMono text-center py-2">or</div>
          <div className="w-full">
            <input
              className="w-full border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6"
              type="text"
              placeholder="Image url"
              onChange={(e) => setImage({ ...image, url: e.target.value })}
              value={image?.url}
            />
          </div>
        </div>


        <div className="w-full md:w-full text-center">
          <button
            className="inline-block w-1/2 m-auto shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition   focus:outline-none focus:ring active:text-teal-500 "
            // onClick={handleClick}
          >
            Publish
          </button>
        </div>
      </div>


      </div>
    </div>
  );
};


export default CategoryForm;


