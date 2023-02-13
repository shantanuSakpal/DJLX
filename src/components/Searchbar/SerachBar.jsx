import React from 'react'
import SuggestionButtons from './SuggestionButton'

const SerachBar = () => {
  return (
    <div className='search-bar' >
        <input type="text" placeholder='search' />
        <SuggestionButtons items = {['car', 'calculator', 'cloths', 'notes', 'Books', 'Sports', 'Accessories', 'Others']}/>
      
    </div>
  )
}

export default SerachBar
