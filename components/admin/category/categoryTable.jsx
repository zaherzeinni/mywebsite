import React from "react";
import { Table } from "antd";
import Link from "next/link";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { handleDelete } from "@/functions/firebase/getData";

const CategoryTable = ({ cats }) => {
  const columns = [
    {
      title: "title",
      // same name from database   // category={title ,....}
      dataIndex: "title",
    },


    {
      title: "image",
      // single category {record} --> record.image.url === category.image.url
      render: (record) => {
        return (
          <>
            <img
              className="  relative  -ml-6  w-24 h-24 object-contain object-center "
              src={record?.image?.url}
              alt=""
            />
          </>
        );
      },
    },


    {
      title: "Actions",

      // 💡💡  render to make style in table in single category
      // single category data ==> title , image , id

      render: (record) => {
        return (
          <>
            <div className=" flex gap-4  items-center">
              <div>
                <AiFillDelete
               // send collection name and single category data to delete
                  onClick={()=>handleDelete("cats",record)}
                  className=" hover:text-red-700 text-red-500 cursor-pointer"
                  size={"25"}
                />
              </div>


              <div>
                <Link href={`/admin/category/edit/${record?.id}`}>
                  <AiFillEdit
                    className="hover:text-blue-700 text-blue-500 cursor-pointer"
                    size={"25"}
                  />
                </Link>
              </div>
            </div>
          </>
        );
      },
    },
  ];


  return (
    <div className=" w-[90%]  md:w-[70%] mx-auto">
      <Table columns={columns} dataSource={cats} />
    </div>
  );
};


export default CategoryTable;