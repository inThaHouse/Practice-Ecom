import { Heading } from '@chakra-ui/react'

interface PageHeaderProps {
  pageTitle: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageTitle }) => {
  return (
    <Heading
      textAlign='center'
      fontWeight='400'
      fontSize={['1.5rem', '2rem', '3rem']}
    >
      {pageTitle}
    </Heading>
  )
}

export default PageHeader
