import React from 'react';
import AdminLayout from '../AdminLayout';
import AdvertiseTable from './advertiseTable';

const AdvertisesMain = ({adverts}) => {
    return (
        <div>
            <AdminLayout>
            <AdvertiseTable adverts={adverts} />
            </AdminLayout>
        </div>
    );
}
export default AdvertisesMain;
