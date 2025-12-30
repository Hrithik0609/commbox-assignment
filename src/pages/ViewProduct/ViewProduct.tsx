import React, { useState } from 'react'
import Rating from '../../components/Rating'
import Accordion from '../../components/Accordion'

const ViewProduct = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  const handleToggle = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className='flex flex-col w-full min-h-screen lg:py-8 lg:px-12 py-6 px-6 lg:gap-8 gap-6'>

      <button className='flex items-center gap-4 w-fit'>
        <img src="/icons/back.svg" alt="back" className='w-4 h-4' />
        <p className='text-sm'>Back to Products</p>
      </button>

      <div className='flex lg:flex-row flex-col w-full lg:gap-8 gap-6'>

        <div className='flex flex-col lg:w-6/12 w-full lg:h-184 h-96 bg-[#F3F4F6] rounded-xl'>

        </div>

        <div className='flex flex-col lg:w-6/12 w-full gap-6'>

          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <span className='bg-[#ECEEF2] py-1.5 px-3 rounded-lg text-xs text-[#030213]'>Category</span>
              <span className='bg-black py-1.5 px-3 rounded-lg text-xs text-white'>In Stock</span>
            </div>

            <h2 className='text-base text-[#0A0A0A]'>Stainless Steel Water Bottle</h2>

            <p className='text-[#4A5565] text-base'>
              Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.
            </p>
          </div>

          <Rating />

          <div className='flex flex-col'>
            <p className='text-[#4A5565] text-sm'>Price</p>
            <p className='lg:text-4xl text-2xl text-[#0A0A0A]'>$29.99</p>
          </div>

          <div className='flex flex-col py-6 border-y border-[#0000001A] gap-6'>

            <div className='grid grid-cols-2 gap-4'>

              {
                [...Array(5)].map((item) => (
                  <div className='flex flex-col gap-0.5'>
                    <p className='text-sm text-[#4A5565]'>Brand</p>
                    <p className='text-base text-[#0A0A0A]'>HydroLife</p>
                  </div>
                ))
              }

            </div>

            <div className=' flex flex-col gap-2'>
              <p>Tags</p>
              <div className='flex items-center gap-2'>
                <span className='p-1.5 rounded-lg border border-[#0000001A] text-xs'>
                  bottle
                </span>

                <span className='p-1.5 rounded-lg border border-[#0000001A] text-xs'>
                  insulated
                </span>
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
            [...Array(3)].map((item, index) => (
              <Accordion
                show={index === activeIndex}
                handleToggle={() => setActiveIndex(index)}
                data={{ title: 'Something', description: 'Ullamco aliqua cupidatat cupidatat non occaecat est culpa velit aliquip ullamco dolore.' }}
              />
            ))
          }

        </div>
      </div>

      <div className='flex flex-col gap-6 w-full'>

        <h2 className='text-base text-[#0A0A0A]'>Customer Reviews</h2>

        {
          [...Array(4)].map(item => (
            <div className='flex flex-col p-6 gap-5 w-full border border-[#0000001A] rounded-[10px]'>

              <div className='flex flex-col gap-0.5'>

                <p className='text-base text-[#0A0A0A]'>John Doe</p>
                <p className='text-xs text-[#4A5565]'>lisa.a@example.com</p>

              </div>

              <p className='text-[#364153] text-base'>
                Keeps my coffee hot all morning!
              </p>

            </div>
          ))
        }


      </div>

    </div>
  )
}

export default ViewProduct