/** @jsx jsx */
import { loadStripe } from '@stripe/stripe-js'
import { jsx } from 'theme-ui'
import { Flex } from 'theme-ui'
import Products from './components/products'
import CartDisplay from './components/cart-display'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe('testing')

const fakeData = [
  {
    name: 'Bananas',
    sku: 'sku_GBJ2Ep8246qeeT',
    price: 400,
    image: 'https://www.fillmurray.com/300/300',
    currency: 'USD'
  },
  {
    name: 'Tangerines',
    sku: 'sku_GBJ2WWfMaGNC2Z',
    price: 100,
    image: 'https://www.fillmurray.com/300/300',
    currency: 'USD'
  }
]

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
