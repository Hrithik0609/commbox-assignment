// import React, { useState } from 'react'


import Pagination from "../../components/Pagination"
import ProductCard from "../../components/ProductCard"
import SelectInput from "../../components/SelectInput"

// const initialParams = {
//     search: '',
//     category: '',
//     sortBy: ''
// }

const sortOptions = [
    {
        name: 'Newest',
        value: 'Newest'
    },
    {
        name: 'Oldest',
        value: 'Oldest'
    },
    {
        name: 'Price: Low to High',
        value: 'Price: Low to High'
    },
    {
        name: 'Price: Hight to Low',
        value: 'Price: Hight to Low'
    },
]

const Products = () => {

    // const [params, setParams] = useState(initialParams)

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setParams({
    //         ...params,
    //         [name]: value
    //     })
    // }


    return (
        <div className='flex flex-col w-full min-h-screen lg:py-8 lg:px-12 py-6 px-6 lg:gap-8 gap-6'>

            <div className='flex flex-col gap-1.5'>
                <h1 className='lg:text-2xl text-xl font-semibold text-[#0A0A0A]'>Product Catalog</h1>
                <p className='lg:text-base text-sm text-[#0A0A0A]'>
                    Discover our wide selection of quality products
                </p>
            </div>

            <div className='flex lg:flex-row flex-col gap-4'>

                <div className='flex lg:w-8/12 w-full bg-[#F3F3F5] p-2 rounded-lg items-center gap-2'>

                    <img src="/icons/search.svg" alt="search" className='w-5 h-5' />

                    <input placeholder='Search products...' className='outline-none w-full placeholder:text-[#717182] text-sm' />

                </div>

                <div className="grid lg:grid-cols-2 lg:w-4/12 w-full gap-4">

                    {/* <SelectInput label="All Categories" options={sortOptions} name="sort" value={params?.sort} />

                    <SelectInput label="" options={sortOptions} name="sort" value={params?.sort} /> */}

                </div>

            </div>

            <div className="flex flex-col gap-4 w-full">

                <p className="text-sm text-[#4A5565]">Showing 8 of 12 products</p>

                <div className="grid lg:grid-cols-4 gap-6">
                    {
                        [...Array(10)].map((item) => (
                            <ProductCard />
                        ))
                    }
                </div>

            </div>

            <Pagination />

        </div>
    )
}

export default Products