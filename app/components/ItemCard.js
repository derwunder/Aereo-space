import React from 'react'
import ButtomCard from './ButtomCard'

const ItemCard = ({title, description}) => {
  return (
    <div className='card  bg-neutral shadow-xl m-1.5'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-center'>
          <button className='btn btn-primary'> Learn More</button>
        </div>
      </div>
    </div>
  )
};

export default ItemCard