import moment from 'moment';
import { useState } from 'react';
import Rating from '../../components/Rating';
import { useProduct } from '../../api/useProduct';
import Accordion from '../../components/Accordion';
import { useNavigate, useParams } from 'react-router-dom';

const ViewProduct = () => {

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>();

  const { data, loading } = useProduct(id!);

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        Loading...
      </div>
    )
  }

  return (
    <div className='flex flex-col w-full min-h-screen lg:py-8 lg:px-12 py-6 px-6 lg:gap-8 gap-6'>

      <button onClick={() => navigate(-1)} className='flex items-center gap-4 w-fit'>
        <img src="/icons/back.svg" alt="back" className='w-4 h-4' />
        <p className='text-sm'>Back to Products</p>
      </button>

      <div className='flex lg:flex-row flex-col w-full lg:gap-8 gap-6'>

        <div className='flex flex-col lg:w-6/12 w-full lg:h-184 h-96 bg-[#F3F4F6] rounded-xl'>
          <img src={data?.thumbnail} alt="product-image" className='w-full h-full object-cover' />
        </div>

        <div className='flex flex-col lg:w-6/12 w-full gap-6'>

          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <span className='bg-[#ECEEF2] py-1.5 px-3 rounded-lg text-xs text-[#030213]'>{data?.category}</span>
              <span className='bg-black py-1.5 px-3 rounded-lg text-xs text-white'>{data?.availabilityStatus}</span>
            </div>

            <h2 className='text-base text-[#0A0A0A]'>{data?.title}</h2>

            <p className='text-[#4A5565] text-base'>
              {data?.description}
            </p>
          </div>

          <Rating value={data?.rating} />

          <div className='flex flex-col'>
            <p className='text-[#4A5565] text-sm'>Price</p>
            <p className='lg:text-4xl text-2xl text-[#0A0A0A]'>${data?.price}</p>
          </div>

          <div className='flex flex-col py-6 border-y border-[#0000001A] gap-6'>

            <div className='grid grid-cols-2 gap-4'>

              <div className='flex flex-col gap-0.5'>
                <p className='text-sm text-[#4A5565]'>Brand</p>
                <p className='text-base text-[#0A0A0A]'>{data?.brand}</p>
              </div>

              <div className='flex flex-col gap-0.5'>
                <p className='text-sm text-[#4A5565]'>SKU</p>
                <p className='text-base text-[#0A0A0A]'>{data?.sku}</p>
              </div>

              <div className='flex flex-col gap-0.5'>
                <p className='text-sm text-[#4A5565]'>Stock</p>
                <p className='text-base text-[#0A0A0A]'>{data?.stock}</p>
              </div>

              <div className='flex flex-col gap-0.5'>
                <p className='text-sm text-[#4A5565]'>Weight</p>
                <p className='text-base text-[#0A0A0A]'>{data?.weight}g</p>
              </div>

              <div className='flex flex-col gap-0.5'>
                <p className='text-sm text-[#4A5565]'>Dimensions</p>
                <p className='text-base text-[#0A0A0A]'>{data?.dimensions?.width} x {data?.dimensions?.height} x {data?.dimensions?.depth} </p>
              </div>

            </div>

            <div className=' flex flex-col gap-2'>
              <p>Tags</p>
              <div className='flex items-center gap-2'>
                {
                  data?.tags?.map(item => (
                    <span className='p-1.5 rounded-lg border border-[#0000001A] text-xs'>
                      {item}
                    </span>
                  ))
                }

              </div>

            </div>

            <button className='h-10 text-sm w-full text-white bg-[#030213] rounded-lg flex items-center justify-center gap-2'>
              <img src="/icons/box.svg" alt="box" className='w-4 h-4' />
              <p>Order Now</p>
            </button>

          </div>

          <div className='flex items-center gap-4'>

            {
              [
                {
                  name: 'Fast Shipping',
                  icon: '/icons/fast-shipping.svg'
                },
                {
                  name: 'Secure Payment',
                  icon: '/icons/secure-payment.svg'
                },
              ].map(({ name, icon }) => (
                <div className='flex items-center gap-2'>
                  <img src={icon} alt="perk-icon" className='w-5 h-5' />
                  <p className='text-sm tet-[#4A5565]'>{name}</p>
                </div>
              ))
            }

          </div>

        </div>

      </div>

      <div className='flex flex-col gap-4 w-full'>

        <h2 className='text-base text-[#0A0A0A]'>Additional Information</h2>

        <div>
          {
            [
              {
                title: 'Warranty Information',
                description: data?.warrantyInformation || ''
              },
              {
                title: 'Shipping Information',
                description: data?.shippingInformation || ''
              },
              {
                title: 'Return Policy',
                description: data?.returnPolicy || ''
              },
            ].map((item, index) => (
              <Accordion
                data={item}
                show={index === activeIndex}
                handleToggle={() => setActiveIndex(index)}
              />
            ))
          }

        </div>
      </div>

      <div className='flex flex-col gap-6 w-full'>

        <h2 className='text-base text-[#0A0A0A]'>Customer Reviews</h2>

        {
          data?.reviews.map(item => (
            <div className='flex flex-col p-6 gap-5 w-full border border-[#0000001A] rounded-[10px]'>

              <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col gap-0.5'>

                  <p className='text-base text-[#0A0A0A]'>{item?.reviewerName}</p>
                  <p className='text-xs text-[#4A5565]'>{item?.reviewerEmail}</p>

                </div>

                <div className='flex flex-col gap-0.5'>
                  <Rating value="" />
                  <p className='text-base text-[#4A5565]'>{moment(item?.date).format('LL')}</p>
                </div>
              </div>

              <p className='text-[#364153] text-base'>
                {item?.comment}
              </p>

            </div>
          ))
        }


      </div>

    </div>
  )
}

export default ViewProduct