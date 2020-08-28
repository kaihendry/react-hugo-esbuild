/** @jsx jsx */
import { loadStripe } from '@stripe/stripe-js'
import { jsx } from 'theme-ui'
import { Flex } from 'theme-ui'
import Products from './components/products'
import CartDisplay from './components/cart-display'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC)

const App = () => {
  return (
    <CartProvider
      mode='checkout-session'
      stripe={stripePromise}
      billingAddressCollection={false}
      successUrl='https://stripe.com'
      cancelUrl='https://twitter.com/dayhaysoos'
      currency='USD'
    >

      <Flex sx={{ justifyContent: 'space-evenly' }}>
        <Products products={fakeData} />
        <CartDisplay />
      </Flex>
    </CartProvider>
  )
}
export default App
