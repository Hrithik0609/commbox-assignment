import React from 'react'

const Rating = ({ value }) => {
  return (
    <div className='flex items-center gap-2'>
      <img src="/icons/rating.svg" alt="rating" className='w-24 h-4' />
      <p className='text-xs text-[#4A5565]'>{value}</p>
    </div>
  )
}

export default Rating