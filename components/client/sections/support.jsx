import React from 'react';
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { Card, SimpleGrid ,Button,Box} from '@chakra-ui/react';
import CustomSupportCard from './customSupportCard';
const Support = () => {
    return (
        <div className='my-12 sm:w-[90%] sm:m-auto '>
            <SimpleGrid columns={[1,1,2,3]} gap={5} mb={14}>
            <CustomSupportCard 
            title={"Chat Support"}
            desc={"Chat online with our team now from anywhere. We provide you with a seamless and hassle-free online chat experience from the comfort of your home. Get the proper assistance now!"}
            icon={ <IoChatboxEllipsesSharp className='mt-2 w-14 h-14 text-white bg-red-500 rounded-2xl p-3 relative -top-8 -right-8' />}
            buttonText={"Chat Now"}
            />
            <CustomSupportCard 
            title={"Call Support"}
            desc={"Reach out to us with your questions, concerns, or challenges. We’ll be happy to help you at any time, and we’re always trying to make things easier for you!"}
            icon={ <FaPhone className='mt-2 w-14 h-14 text-white bg-red-500 rounded-2xl p-3 relative -top-8 -right-8' />}
            buttonText={"Call Support"}
            />

            <CustomSupportCard 
            title={"Book an Appointment"}
            desc={"Now book an appointment with any of your nearest locations of GarbhaGudi IVF Centre, and get the best fertility treatments from our experts!"}
            icon={ <FaCalendar className='mt-2 w-14 h-14 text-white bg-red-500 rounded-2xl p-3 relative -top-8 -right-8' />}
            buttonText={"Book an Appointment"}
            />


            {/* <Card flexDirection={'column'} borderRadius={10} gap={5} className='my-6 md:my-0 !shadow-2xl !rounded-3xl'>
            <Box flexGrow={1}>
            <IoChatboxEllipsesSharp className='mt-2 w-14 h-14 text-white bg-red-500 rounded-full p-3' />
            
            <Box padding={5}>
            <p className='text-xl font-medium text-gray-800 pb-2'>Chat Support</p>
            <p>Chat online with our team now from anywhere. We provide you with a seamless and hassle-free online chat experience from the comfort of your home. Get the proper assistance now!</p>
            </Box>
            </Box>
            <Button fontSize={18} mt='4' bg={'red'} textColor={'white'} _hover={{bg:"red.500"}}>Chat Now</Button>
            </Card> */}
            
            {/* <Card flexDirection={'column'} borderRadius={10} gap={5} className='my-6 md:my-0 !shadow-2xl !rounded-3xl'>
            <Box flexGrow={1}>
            <FaPhone className='mt-2 w-14 h-14 text-white bg-red-500 rounded-full p-3' />
            <Box padding={5}>
            <p className='text-xl font-medium text-gray-800 pb-2'>Call Support</p>
            <p>Reach out to us with your questions, concerns, or challenges. We’ll be happy to help you at any time, and we’re always trying to make things easier for you!</p>
            </Box>
            </Box>
            <Button fontSize={18} mt='4' bg={'red'} textColor={'white'} _hover={{bg:"red.500"}}>Call Now</Button>
            </Card>
            


            <Card flexDirection={'column'} borderRadius={10} gap={5} className='my-6 md:my-0 !shadow-2xl !rounded-3xl'>
                <Box flexGrow={1}>
            <FaCalendar className='mt-2 w-14 h-14 text-white bg-red-500 rounded-full p-3' />
            <Box padding={5}>
            <p className='text-xl font-medium text-gray-800 pb-2'>Book an Appointment</p>
            <p>Now book an appointment with any of your nearest locations of GarbhaGudi IVF Centre, and get the best fertility treatments from our experts!</p>
            </Box>
            </Box>
            
            <Button fontSize={18} mt='4' bg={'red'} textColor={'white'} _hover={{bg:"red.500"}}>Book an Appointment</Button>
            </Card> */}
            
            </SimpleGrid>
        </div>
    );
}

export default Support;
