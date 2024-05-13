// import React from "react";
// import MainAdmin from "@/components/admin/MainAdmin";
// import { getCount } from "@/functions/firebase/getData";


// const Admin = ({ cats, subcats, products, users, projects }) => {
//   return (
//     <div>
//       <MainAdmin
//         cats={cats}
//         subcats={subcats}
//         products={products}
//         users={users}
//         projects={projects}
//       />
//     </div>
//   );
// };

// export default Admin;

// Admin.getInitialProps = async (context) => {
//   const cats = await getCount("cats");
//   const subcats = await getCount("subcats");
//   const products = await getCount("products");
//   const users = await getCount("users");
//   const projects = await getCount("projects");
//   return {
//     cats: cats,
//     subcats: subcats,
//     products: products,
//     users: users,
//     projects: projects,
//   };
// };
