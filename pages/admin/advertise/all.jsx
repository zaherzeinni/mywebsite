import React from 'react';
import AdvertisesMain from '@/components/admin/advertise/advertises';
import { getDocuments } from '@/functions/firebase/getData';

const All = ({adverts}) => {
    return (
        <div>
            <AdvertisesMain
            adverts={adverts}
            />
        </div>
    );
}

export default All;



// serverside
    All.getInitialProps = async (context) => {
    const Advertises = await getDocuments("adverts"); //  []
  
  
    console.log("data", Advertises);
  
  
    return {
      // props from serverside will go to props in clientside
      adverts: Advertises,
    };
  };
  
  
  