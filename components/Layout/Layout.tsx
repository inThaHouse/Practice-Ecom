import { Container } from '@chakra-ui/react'

interface LayoutProps {
	children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Container maxW='960px' centerContent py={['1rem', '3rem']}>
			{children}
		</Container>
	)
}

export default Layout
