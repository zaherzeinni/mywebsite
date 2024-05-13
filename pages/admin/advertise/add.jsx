import React from 'react';
import AddAdvertiseMain from '@/components/admin/advertise/addAdvertise';
import { useState,useEffect } from 'react';
import { getDocuments } from '@/functions/firebase/getData';

const Add = () => {



    const [adverts, setAdverts] = useState([]);

    useEffect(() => {
      const getAdverts = async () => {
        setAdverts([]);
        const data = await getDocuments("adverts");
        console.log(data, "fetch adverts ====>>>>");
      
        setAdverts(data);
      
      };
      getAdverts();
    }, []);


    return (
        <div>
            <AddAdvertiseMain />
        </div>
    );
}

export default Add;