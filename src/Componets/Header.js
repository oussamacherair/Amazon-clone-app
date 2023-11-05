import React from 'react'
import Image from 'next/image'
import { SearchIcon, ShoppingCartIcon, MenuIcon } from '@heroicons/react/outline'
import { signIn,signOut,useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
function Header() {
  const { data: session } = useSession();
 const router=useRouter()
 const items=useSelector(selectItems)
  
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className='mt-2 mx-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            onClick={()=> router.push('/')}
            className='cursor-pointer object-contain'
            alt=''
          />

        </div>
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' />
          <SearchIcon className='h-12 p-4' />
        </div>
        <div className='text-white flex items-center text-xs space-x-6 mx-6'>

          <div className='link' onClick={!session?signIn:signOut}>
           <p className='hover:underline'>{session? `Hello,${session.user.name}`:'Sign In'}</p> 
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>

          <div className='link' onClick={()=>router.push('/orders')}>
            <p className='font-extrabold md:text-sm'>Returns</p>
            <p className='font-extrabold md:text-sm'>& orders</p>
          </div>

          <div onClick={()=>router.push('/checkout')} className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length}</span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden  md:inline font-extrabold md:text-sm mt-2'>Basket</p>
          </div>
        </div>
      </div>

      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Buisness</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
      </div>

    </header>

  )
}

export default Header