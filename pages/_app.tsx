import Navbar from 'components/NavBar/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { CartContext, useCart } from '../hooks/use-cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const cart = useCart()

  return (
    <CartContext.Provider value={cart}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </CartContext.Provider>
  )
}

export default MyApp
