import React from 'react';
import AdminLayout from './AdminLayout';
import CountCard from './CountCards';
const MainAdmin = ({cats}) => {
    return (
        <div>
            <AdminLayout>
               <CountCard
               cats={cats}
               />
            </AdminLayout>
        </div>
    );
}

export default MainAdmin;
