import { Button, useToast } from '@chakra-ui/react'
import { useCartContext } from 'hooks/use-cart'

interface AddToCartButtonProps {
  priceId: string
  productTitle: string
}

const AddToCartButton = ({ priceId, productTitle }: AddToCartButtonProps) => {
  const { addToCart } = useCartContext()
  const toast = useToast()

  const handleAddToCart = (priceId: string, productTitle: string): void => {
    addToCart(priceId)

    toast({
      title: `${productTitle} is added to cart.`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }

  return (
    <Button
      colorScheme='blue'
      variant='outline'
      mt='15px'
      onClick={() => handleAddToCart(priceId, productTitle)}
    >
      Add To Cart
    </Button>
  )
}

export default AddToCartButton
