import { ChakraProvider } from '@chakra-ui/react'
//import '../styles/globals.css'
import '../styles/global.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import  ProgressBar from '../components/common/progressBar';
import { useEffect } from 'react';


import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { StateContextProvider } from '@/functions/context'

import { Provider } from 'react-redux';
import store from '@/redux/store';


export default function MyApp({ Component, pageProps }) {


    useEffect(() => {
        if('serviceWorker' in navigator) {
          window.addEventListener('load', function () {
            navigator.serviceWorker.register('/service-worker.js').then(
              function (registration) {
                console.log('Service Worker registration successful with scope: ', registration.scope)
              },
              function (err) {
                console.error('Service Worker registration failed: ', err)
              }
            )
          })
        }
      }, [])

      


    return (
        <>
    <ChakraProvider>
    <StateContextProvider>
    <Provider store={store}>
    <Component {...pageProps} />
    <ToastContainer />
    <ProgressBar/>
    </Provider>
    </StateContextProvider>
    </ChakraProvider>
    </>
)
}