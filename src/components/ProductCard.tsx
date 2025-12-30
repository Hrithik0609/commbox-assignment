import Rating from './Rating';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate(`/products/${data?.id}`)
    }

    return (
        <div onClick={handleNavigation} className='flex flex-col w-full p-4 border border-[#0000001A] rounded-xl select-none cursor-pointer h-108'>

            <div className='w-full h-81 bg-[#F3F4F6] rounded-xl'>
                <img src={data?.thumbnail} alt="product-image" className='w-full h-full object-cover' />
            </div>

            <div className='flex flex-col mt-4 mb-5.5'>
                <h2 className='lg:text-base text-sm text-[#0A0A0A]'>
                    {data?.title}
                </h2>
                <Rating value={data?.rating} />
            </div>

            <p className='text-base text-[#0A0A0A]'>${data?.price}</p>

        </div>
    )
}

export default ProductCard