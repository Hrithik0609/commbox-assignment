import Rating from './Rating';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate('/products/1')
    }

    return (
        <div onClick={handleNavigation} className='flex flex-col w-full p-4 border border-[#0000001A] rounded-xl select-none cursor-pointer h-108'>

            <div className='w-full h-81 bg-[#F3F4F6] rounded-xl'>
                {/* <img src="" alt="" className='w-full h-full object-cover' /> */}
            </div>

            <div className='flex flex-col mt-4 mb-5.5'>
                <h2 className='lg:text-base text-sm text-[#0A0A0A]'>Premium Wireless Headphones</h2>
                <Rating />
            </div>

            <p className='text-base text-[#0A0A0A]'>$299.00</p>

        </div>
    )
}

export default ProductCard