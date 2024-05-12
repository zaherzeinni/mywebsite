import React from 'react';
import AddCategoryMain from '@/components/admin/category/addCategory';
const Add = () => {
    return (
        <div>
            <AddCategoryMain/>
        </div>
    );
}

export default Add;



// serverside
Add.getInitialProps = async (context) => {
    const Categories = await getDocuments("cats"); //  []
  
    console.log("data", Categories);
  
    return {
      // props from serverside will go to props in clientside
      cats: Categories,
    };
  };
  