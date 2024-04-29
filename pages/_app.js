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
//import { ThemeProvider } from '@material-ui/core/styles'
import MuiTheme from './theme/MuiTheme';

import Head from "next/head";
import OpenGraphTags from './utils/OpenGraphTags';


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
        <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="ITPROMAX STORE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <OpenGraphTags />
        <title>ITPROMAX</title>
      </Head>

    <ChakraProvider>
    <Provider store={store}>
    {/* <MuiTheme> */}
    <StateContextProvider>

    <Component {...pageProps} />
    <ToastContainer />
    <ProgressBar/>
    </StateContextProvider>
    {/* </MuiTheme> */}
    </Provider>
    
    </ChakraProvider>
    </>
)
}