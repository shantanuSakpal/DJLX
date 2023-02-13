import React from 'react'
import { FaArrowUp } from 'react-icons/fa';

export const GoToTopButton = () => {
    const gototop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (
        <div >
            <button className='go-to-top-btn' onClick={gototop}><FaArrowUp className=' ' /></button>
        </div>
    )
}
