import { Flex, Center, Text } from '@chakra-ui/react'

const Footer = () => {
	return (
		<Flex
			as='footer'
			padding='1.5rem'
			bg='blue.600'
			position='fixed'
			width='100%'
			bottom='0'
		>
			<Center color='white' flexDirection='column' alignItems='left'>
				<Text>This is fictional e-store 😁 made for fun and luuvvv</Text>
				<Text>
					Code can be found{' '}
					<a
						style={{ textDecoration: 'underline' }}
						href='https://github.com/inThaHouse/nextjs-random-estore'
					>
						here
					</a>
				</Text>
			</Center>
		</Flex>
	)
}

export default Footer
