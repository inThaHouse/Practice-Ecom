import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { useCartContext } from 'hooks/use-cart'
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from '@chakra-ui/react'
import productsData from '../utils/products.json'
import { IProduct } from 'utils/types/IProduct'
import React from 'react'
import Footer from 'components/Footer/Footer'
import QuantityCellInput from 'components/Table/QuantityCellInput'
import PageHeader from 'components/PageHeader/PageHeader'

const cart = () => {
  const { cartDetails, startCheckout } = useCartContext()
  const { products } = cartDetails

  return (
    <>
      <Head>
        <title>Cart - inThaShop</title>
      </Head>

      <Layout>
        <main>
          <PageHeader pageTitle='cart' />

          <Table variant='simple' size={'sm'}>
            <TableCaption>
              {' '}
              {Object.keys(products).length > 0 ? (
                <Button onClick={startCheckout} colorScheme='teal'>
                  Go To Checkout
                </Button>
              ) : (
                'Your cart is empty'
              )}
            </TableCaption>

            <Thead>
              <Tr>
                <Th>Product Name</Th>
                <Th>Price Per Item</Th>
                <Th>Quantity</Th>
                <Th isNumeric>Item Total</Th>
              </Tr>
            </Thead>

            <Tbody>
              {productsData.map((product: IProduct, index: number) => {
                if (products[product.priceId]) {
                  return (
                    <Tr key={index}>
                      <Td>{product.title}</Td>
                      <Td>{product.price}</Td>
                      <Td>
                        <QuantityCellInput
                          quantity={products[product.priceId].quantity}
                          priceId={product.priceId}
                        />
                      </Td>
                      <Td>
                        {product.price * products[product.priceId].quantity}
                      </Td>
                    </Tr>
                  )
                }

                return <Tr key={index}></Tr>
              })}
            </Tbody>
          </Table>
        </main>
      </Layout>
      <Footer />
    </>
  )
}

export default cart
