import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, description, price, image, category, title }) {
    const [rating, setRating] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)
        setHasProme(Math.random() < .5)
    }, [])
    const [hasPrime, setHasProme] = useState(true)
    const addItemToBasket = () => {
        const product = { id, description, price, image, category, title, rating, hasPrime }
        dispatch(addToBasket(product))
    }







    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image src={image} width={200} height={200} className='object-contain self-center' style={{ height: '200px', width: '200px' }} />
            <h4 className='my-3 line-clamp-2'>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((_, i) =>
                (
                    <StarIcon key={i} className='h-5 text-yellow-500' />
                ))}

            </div>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency quantity={price} currency='GBP' />
            </div>
            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-12' src='https://rebrand.ly/ozz5' alt='has prime' />
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>

            )}
            <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
        </div>

    )
}

export default Product