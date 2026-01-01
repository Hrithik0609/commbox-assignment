import { useState } from "react";
import { useProducts } from "../../api/useProducts";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";
import CustomSelect from "../../components/CustomSelect";

const initialParams = {
    search: '',
    category: 'All Categories',
    sortBy: 'Price: Low to High'
}

const categories = [
    {
        label: 'All Categories',
        value: 'All Categories'
    },
    {
        label: 'Electronics',
        value: 'Electronics'
    },
    {
        label: 'Furniture',
        value: 'Furniture'
    },
    {
        label: 'Home & Kitchen',
        value: 'Home & Kitchen'
    },
    {
        label: 'Photography',
        value: 'Photography'
    },
    {
        label: 'Sports',
        value: 'Sports'
    },
    {
        label: 'Bags',
        value: 'Bags'
    },
]

const sortOptions = [
    {
        label: 'Newest',
        value: 'Newest'
    },
    {
        label: 'Oldest',
        value: 'Oldest'
    },
    {
        label: 'Price: Low to High',
        value: 'Price: Low to High'
    },
    {
        label: 'Price: High to Low',
        value: 'Price: High to Low'
    },
]

const Products = () => {

    const [params, setParams] = useState(initialParams)

    const { data, loading } = useProducts(params);

    console.log(data, 'datassss')

    const handleChange = (e) => {
        const { name, value } = e.target
        setParams({
            ...params,
            [name]: value
        })
    }

    if (loading) {
        return (
            <div className='flex flex-col items-center justify-center w-full h-screen'>
                Loading...
            </div>
        )
    }

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

                    <input placeholder='Search products...' name="search" value={params?.search} onChange={handleChange} className='outline-none w-full placeholder:text-[#717182] text-sm' />

                </div>

                <div className="grid lg:grid-cols-2 lg:w-4/12 w-full gap-4">

                    <CustomSelect icon="/icons/filter.svg" label={params?.category} onChange={(value) => setParams({ ...params, category: value })} value={params?.category} options={categories} />

                    <CustomSelect label={params?.sortBy} onChange={(value) => setParams({ ...params, sortBy: value })} value={params?.sortBy} options={sortOptions} />

                </div>

            </div>

            <div className="flex flex-col gap-4 w-full">

                <p className="text-sm text-[#4A5565]">Showing 8 of 12 products</p>

                <div className="grid lg:grid-cols-4 gap-6">
                    {
                        data?.products?.map((item) => (
                            <ProductCard data={item} />
                        ))
                    }
                </div>

            </div>

            <Pagination />

        </div>
    )
}

export default Products