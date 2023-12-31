import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({ id, description, price, image, category, title, hasPrime, rating }) {
   const dispatch=useDispatch()

    const addItemToBasket=()=>{
        const product={ id, description, price, image, category, title, hasPrime, rating }
        dispatch(addToBasket(product))
    }
    const removeItemFromBaskt=()=>
    {
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={200} width={200} className='object-contain' />
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) =>
                        <StarIcon key={i} className='h-5 text-yellow-500' />

                    )}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency='GBP' />
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img className='w-12' src='https://rebrand.ly/ozz5' alt='has prime' />
                        <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                    </div>

                )}
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button' onClick={addItemToBasket}>add to basket </button>
                <button className='button ' onClick={removeItemFromBaskt}>remove from basket </button>
            </div>

        </div>
    )
}

export default CheckoutProduct