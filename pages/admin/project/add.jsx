import React, { useState } from 'react';
import { Input,Box,Button ,Stack} from '@chakra-ui/react';
import AddProjectMain from '@/components/admin/project/addProject';
import { getDocuments } from '@/functions/firebase/getData';

const AddProjectPage = () => {
    return (
            <div>
                <AddProjectMain
                />
        </div>
    );
}

export default AddProjectPage;


// serverside
AddProjectPage.getInitialProps = async (context) => {

  
    return {
      // props from serverside will go to props in clientside
    };
  };
  