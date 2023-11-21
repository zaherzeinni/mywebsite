import React from 'react';
import { useAuth } from '@/functions/context';
import Navbar from '@/components/client/layout/navbar';

const Index = () => {

const {profile,userData} = useAuth();
console.log("user Data---->",profile)


    return (
       
        <div >
            <Navbar />
        </div>

      
    );
}

export default Index;
