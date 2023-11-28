import { ChakraProvider } from '@chakra-ui/react'
//import '../styles/globals.css'
import '../styles/global.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { StateContextProvider } from '@/functions/context'


export default function MyApp({ Component, pageProps }) {

    return (
        <>
    <ChakraProvider>
    <StateContextProvider>
    
    <Component {...pageProps} />
    <ToastContainer />
    </StateContextProvider>
    </ChakraProvider>
    </>
)
}