import { ChakraProvider } from '@chakra-ui/react'
//import '../styles/globals.css'
import '../input.css'

import { StateContextProvider } from '@/functions/context'

export default function MyApp({ Component, pageProps }) {

    return (
    <ChakraProvider>
    <StateContextProvider>
    
    <Component {...pageProps} />
    
    </StateContextProvider>
    </ChakraProvider>
)
}