import React from 'react'
import dummyImage from "../Images/dummy-image.webp"

export const ProductCards = () => {

    const price = 2500000;
    const title = "This is a house.";
    return (
        <div className='product-cards  rounded-lg my-5 mx-5 p-2 bg-white border-2 border-gray-500 text-center'>
            <div>
                <img src={dummyImage} alt="dummy image" />
            </div>
            <h3 className='font-bold'>{title}</h3>
            <h3 >₹ {price}</h3>
        </div>
    )
}
