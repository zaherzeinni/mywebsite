import React from 'react';
import { getDocuments } from '@/functions/firebase/getData';
import UsersMain from '@/components/admin/users';
const UsersPage = ({users}) => {
    return (
        <div>
            <UsersMain users={users}/>
           
        </div>
    );
}


export default UsersPage;




// serverside
UsersPage.getInitialProps = async (context) => {
    const Users = await getDocuments("users"); //  []
 
    console.log("data_users", Users);
 
    return {
      // props from serverside will go to props in clientside
      users:Users,
    };
  };
 


