import { loadStripe } from '@stripe/stripe-js'
import { LineItem } from './types/LineItem'

export const goToCheckout = async (lineItems: LineItem[]) => {
  console.log(lineItems)
  const stripe = await loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_API_KEY}`)

  if (stripe) {
    await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems,
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    })
  }
}
