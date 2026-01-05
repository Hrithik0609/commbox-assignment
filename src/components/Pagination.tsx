import React from 'react'

type PaginationTypes = {
  page: number,
  total: number,
  handlePrev: React.MouseEventHandler<HTMLButtonElement>,
  handleNext: React.MouseEventHandler<HTMLButtonElement>,
  handleSetLimit: () => void
}

const Pagination = ({ page, total, handlePrev, handleNext, handleSetLimit }: PaginationTypes) => {


  return (
    <div className='flex items-center gap-4 justify-center'>

      <button disabled={page === 30} onClick={handlePrev} className='flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'>
        <img src="/icons/next-arrow.svg" alt="prev" className='w-4 h-4 -rotate-180' />
        Previous
      </button>

      {
        total ? <>
          {
            [...Array(Math.round(total / 30))].map((item, index) => (
              <button
                onClick={() => {
                  let temp = 30 * (index + 1)
                  handleSetLimit(temp)
                }}
                className={`py-2 px-4  rounded-lg ${page / 30 === (index + 1) ? 'border border-[#0000001A]' : 'border border-transparent'}`}>
                {index + 1}
              </button>
            ))
          }
        </> : ''
      }

      <button onClick={handleNext} className='flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'>
        Next
        <img src="/icons/next-arrow.svg" alt="prev" className='w-4 h-4' />
      </button>

    </div>
  )
}

export default Pagination