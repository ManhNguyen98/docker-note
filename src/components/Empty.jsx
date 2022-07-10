import React from 'react'
import EmptyImage from '../assets/empty-image.png'

const Empty = () => {
  return (
    <div className='empty-list'>
      <div className='thumb'>
        <img src={EmptyImage} alt="empty" />
      </div>
      <h3>Your list is empty.</h3>
    </div>
  )
}

export default Empty