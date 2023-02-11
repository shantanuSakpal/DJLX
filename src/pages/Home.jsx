import React from 'react'
import { ProductCards } from '../components/ProductCards'
import { Products } from '../components/Products'

export const Home = () => {
    return (
        <div className='h-screen'>
            <h1 className='font-bold text-xl m-2'>Welcome to DJLX, The students' OLX.</h1>
            <Products />

        </div>
    )

}
