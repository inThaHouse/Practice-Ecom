import { Container } from '@chakra-ui/react'

interface LayoutProps {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxW='960px' centerContent py={['1rem', '1.5rem']}>
      {children}
    </Container>
  )
}

export default Layout
