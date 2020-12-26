import { useState, createContext, useContext } from 'react'
import { goToCheckout } from 'utils/payment'
import { LineItem } from 'utils/types/LineItem'
import products from '../utils/products.json'

interface CartDetails {
  products: any
}

export const CartContext = createContext({})

export const useCart = () => {
  const [cartDetails, setCartDetails] = useState<CartDetails>({ products: {} })

  const cartItems = Object.keys(cartDetails.products).map((priceId) => {
    const cartItem = products.find((product) => product.priceId === priceId)

    if (cartItem) {
      return {
        ...cartDetails.products[priceId],
        priceId: cartItem.priceId,
        pricePerUnit: cartItem.price,
      }
    } else {
      return {}
    }
  })

  const addToCart = (priceId: string) => {
    setCartDetails((previous) => {
      let cart: any = { ...previous }

      if (cart.products[priceId]) {
        cart.products[priceId].quantity = cart.products[priceId].quantity + 1
      } else {
        cart.products[priceId] = { quantity: 1 }
      }

      return cart
    })
  }

  const updateQuantity = (priceId: string, quantity: number) => {
    setCartDetails((previous) => {
      let cart: any = { ...previous }

      if (cart.products[priceId]) {
        cart.products[priceId].quantity = quantity
      }

      return cart
    })
  }

  const startCheckout = () => {
    const lineItems: LineItem[] = cartItems.map((cartItem) => {
      return {
        price: cartItem.priceId,
        quantity: cartItem.quantity,
      }
    })

    goToCheckout(lineItems)
  }

  return {
    addToCart,
    cartDetails,
    setCartDetails,
    startCheckout,
    cartItems,
    updateQuantity,
  }
}

export const useCartContext: any = () => {
  const cart = useContext(CartContext)

  return cart
}
