import React from 'react';
import AdminLayout from './AdminLayout';
import CountCard from './CountCards';
const MainAdmin = ({cats,subcats,products,users}) => {
    return (
        <div>
            <AdminLayout>
               <CountCard
               cats={cats}
               subcats={subcats}
               products={products}
               users={users}
               />
            </AdminLayout>
        </div>
    );
}

export default MainAdmin;
