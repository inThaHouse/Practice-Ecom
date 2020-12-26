import Link from 'next/link'
import { Flex, Heading, Box, Button } from '@chakra-ui/react'
import { useCartContext } from 'hooks/use-cart'

const Navbar = () => {
	const { startCheckout, cartDetails } = useCartContext()

	return (
		<Flex
			as='nav'
			padding='1.5rem'
			bg='blue.600'
			color='white'
			align='center'
			justify='space-between'
			wrap='wrap'
			width='100%'
		>
			<Flex>
				<Link href='/'>
					<Heading cursor='pointer' letterSpacing='1px'>
						inThaShop
					</Heading>
				</Link>
			</Flex>
			<Box mt={['10px', '0px']}>
				<Link href='/cart'>
					<Button colorScheme='teal' mr='10px'>
						Cart
					</Button>
				</Link>
				{Object.keys(cartDetails.products).length > 0 && (
					<Button onClick={startCheckout} colorScheme='teal'>
						Checkout
					</Button>
				)}
			</Box>
		</Flex>
	)
}

export default Navbar
