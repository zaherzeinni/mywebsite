// import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import { Image, Upload } from 'antd';
// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// const TradeIn = ({initialValues}) => {
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState('');
//   const [fileList, setFileList] = useState([
//     // {
//     //   uid: '-1',
//     //   name: 'image.png',
//     //   status: 'done',
//     //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     // },

//   ]);
//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//     setPreviewOpen(true);
//   };
//   const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
//   const uploadButton = (
//     <button
//       style={{
//         border: 0,
//         background: 'none',
//       }}
//       type="button"
//     >
//       <PlusOutlined />
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Upload
//       </div>
//     </button>
//   );


//   const [image, setImage] = useState(initialValues?.image || "");



  


//   const [file, setFile] = useState("");

//   const onFinish = async (values) => {
//     console.log("values-->", values);
//     console.log("file", file);

//     if (!file) {
//       message.error("Please select image");
//       return; // stoppppp progress the function
//     } else {
//       values.image = await uploadImages(file, true, "emails"); // result is image link from firebase/storage
//       values.timeStamp = serverTimestamp()
//       await addDoc(collection(db, "emails"), values);
//       message.success("Images uploaded successfully");
//     }
//   }





//   return (
//     <>

// <div
//           layout="vertical"
//           // onFinish same as submit normal form
//           onFinish={(values) =>
//             // name of our function
//             onFinish({
//               ...values,
//               image,
//             })
//           }
//           initialValues={{
//             title: initialValues?.title || "",
//             image: initialValues?.image || "",
//           }}
//         />

//       <Upload
//         // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//         accept="image/*"
//         beforeUpload={(file) => {
//             setFile(file);
//             // setFiles((prev) => [...prev, file]);
//             return false;
//           }}
//         listType="picture-card"
//         onRemove={() => setFile("")}
//         fileList={fileList}
//         onPreview={handlePreview}
//         onChange={handleChange}
//         maxCount={4}
//         id='emailimage'
//       >
//         {fileList.length >= 8 ? null : uploadButton}
//       </Upload>
//       {previewImage && (
//         <Image
//           wrapperStyle={{
//             display: 'none',
//           }}
//           preview={{
//             visible: previewOpen,
//             onVisibleChange: (visible) => setPreviewOpen(visible),
//             afterOpenChange: (visible) => !visible && setPreviewImage(''),
//           }}
//           src={previewImage}
//         />
//       )}
//     </>
//   );
// };
// export default TradeIn;