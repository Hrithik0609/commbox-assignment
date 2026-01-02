import React from 'react'

type PaginationTypes = {
  page?: number,
  handleNext?: React.MouseEventHandler<HTMLButtonElement>,
  handlePrev?: React.MouseEventHandler<HTMLButtonElement>,
}

const Pagination = ({ page, handleNext, handlePrev }: PaginationTypes) => {

  return (
    <div className='flex items-center justify-center mx-auto py-4'>
      <button disabled={page === 1} onClick={handlePrev} className='h-9 w-9 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center border border-[#808080]/50'>
        <img src="/back.svg" alt="back" className='w-4 h-4' />
      </button>

      <span className='lg:text-sm text-xs font-semibold text-[#121212] w-9 h-9 flex items-center justify-center'>{page}</span>

      <button disabled={page === 10} onClick={handleNext} className='h-9 w-9 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center border border-[#808080]/50'>
        <img src="/back.svg" alt="back" className='w-4 h-4 -rotate-180' />
      </button>
    </div>
  )
}

export default Pagination