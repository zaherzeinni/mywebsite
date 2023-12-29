import React from "react";
import { Table } from "antd";
import Link from "next/link";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { handleDeleteGlobal } from "@/functions/firebase/getData";

const AdvertiseTable = ({ adverts}) => {
  const columns = [
    {
      title: "Advertises",
      // same name from database   // category={title ,....}
      dataIndex: "title",
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
                
                  onClick={() => handleDeleteGlobal("adverts", record)}
                  className=" hover:text-red-700 text-red-500 cursor-pointer"
                  size={"25"}
                />
              </div>

              <div>
                <Link href={`/admin/advertise/edit/${record?.id}`}>
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
      <Table columns={columns} dataSource={adverts} />
    </div>
  );
};

export default AdvertiseTable;
