type RatingTypes = {
  value?: number | string
}

const Rating = ({ value }: RatingTypes) => {
  return (
    <div className='flex items-center gap-2'>
      <img src="/icons/rating.svg" alt="rating" className='w-24 h-4' />
      {value ? <p className='text-xs text-[#4A5565]'>{value}</p> : ''}
    </div>
  )
}

export default Rating