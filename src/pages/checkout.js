import React from 'react'
import axios from 'axios'
import Header from '../Componets/Header'
import CheckoutProduct from '../Componets/CheckoutProduct'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.stripe_public_key)
function Checkout() {
    const { data: session } = useSession()
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)

    const createCheckoutSession = async () => {
        const stripe = await stripePromise

        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items: items,
            email: session.user.email
        })

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })


    }
    return (


        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex  max-w-screen-2xl mx-auto'>
                <div className='flex-grow m-5 shadow-sm'>
                    <Image width={1020} height={250} className='object-contain' src='https://rebrand.ly/2912z' />

                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>Your shopping Basket</h1>
                        {items.map((item, i) =>
                        (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>

                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):
                                <span className='font-bold'>
                                    <Currency quantity={total} currency='GBP' />
                                </span>
                            </h2>
                            <button onClick={createCheckoutSession} role='link' disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                            </button>
                        </>
                    )}
                </div>

            </main>
        </div>
    )
}

export default Checkout