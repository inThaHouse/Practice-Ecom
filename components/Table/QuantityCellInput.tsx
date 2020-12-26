import { Input, Button, Flex } from '@chakra-ui/react'
import { useCartContext } from 'hooks/use-cart'

interface Props {
	quantity: string | number
	priceId: string
}

const QuantityCellInput = ({ quantity, priceId }: Props) => {
	const { updateQuantity } = useCartContext()

	const handleSubmit = (e: any) => {
		e.preventDefault()

		const quantityInput = Array.from(e.currentTarget.elements).find(
			(element: any) => element.name === 'quantity'
		)

		// @ts-ignore
		updateQuantity(priceId, quantityInput.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<Flex alignItems='center' flexDirection={['column', 'row']}>
				<Input
					type='number'
					name='quantity'
					min={0}
					defaultValue={quantity}
					size={'sm'}
					width={['100%', '30%']}
				/>
				<Button
					type='submit'
					ml='5px'
					mt={['10px', '0px']}
					width={['100%', '35%']}
				>
					update
				</Button>
			</Flex>
		</form>
	)
}

export default QuantityCellInput
