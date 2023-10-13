import React from 'react';
import { Spinner } from '@chakra-ui/react';

const LoaderComp = () => {
    return (
        <div>
            
        <div className='text-blue-400 h-[100vh] flex justify-center items-center'>

        <Spinner size={"xl"} />

        </div>

        </div>
    );
}

export default LoaderComp;
