import Head from 'next/head'
import products from '../utils/products.json'
import { Box, Image, Heading, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'
import { IProduct } from 'utils/types/IProduct'
import Layout from '../components/Layout/Layout'
import AddToCartButton from 'components/Buttons/AddToCart'
import Footer from 'components/Footer/Footer'
import PageHeader from 'components/PageHeader/PageHeader'

const Homepage = () => {
  return (
    <div>
      <Head>
        <title>Home - inThaShop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <main>
          <PageHeader pageTitle='Our latest stuff!' />
          <SimpleGrid
            columns={[1, 2, 3]}
            spacing={10}
            mb='100px'
            mt={['1rem', '1.5rem']}
          >
            {products.map(({ title, image, priceId, price }: IProduct) => (
              <Box
                key={priceId}
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                borderColor='black'
                padding='10px'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                _hover={{ border: '2px solid #2b6cb0' }}
              >
                <Link href={`/products/${priceId}`}>
                  <Image src={image} alt={title} cursor='pointer' />
                </Link>
                <Box>
                  <Heading
                    fontWeight='semibold'
                    as='h2'
                    lineHeight='tight'
                    size={'md'}
                  >
                    {title}
                  </Heading>
                  <Heading as='h2' size={'sm'} mt={'10px'}>
                    {price} $
                  </Heading>
                </Box>

                <AddToCartButton priceId={priceId} productTitle={title} />
              </Box>
            ))}
          </SimpleGrid>
        </main>
      </Layout>
      <Footer />
    </div>
  )
}

export default Homepage
