import products from '../../utils/products.json'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { IProduct } from 'utils/types/IProduct'
import { Box, Image, Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import AddToCartButton from 'components/Buttons/AddToCart'
import Layout from 'components/Layout/Layout'
import Footer from 'components/Footer/Footer'

interface ProductPageProps {
	product: IProduct
}

const ProductPage = ({ product }: ProductPageProps) => {
	const { image, title, description, price, priceId } = product
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<>
					<Heading
						textAlign='center'
						fontWeight='400'
						fontSize={['2rem', '4rem']}
						mb='30px'
					>
						{title}
					</Heading>
					<Flex
						minH={['auto', 'auto', '50vh']}
						flexDirection={['column', 'column', 'row']}
						justifyContent='space-between'
					>
						<Box w={['100%', '100%', '50%']}>
							<Image src={image} alt={title} />
						</Box>
						<Box w={['100%', '100%', '45%']} mt={['15px', '15px', 0]}>
							<Heading as='p' size={'xs'}>
								{description}
							</Heading>
							<Heading>{price} $</Heading>
							<AddToCartButton priceId={priceId} productTitle={title} />
						</Box>
					</Flex>
				</>
			</Layout>
			<Footer />
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const product = products.find(
		(product) => product.priceId === context.params?.productTitle
	)

	return {
		props: { product },
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = products.map((product) => {
		const { priceId } = product

		return {
			params: {
				productTitle: priceId,
			},
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export default ProductPage
