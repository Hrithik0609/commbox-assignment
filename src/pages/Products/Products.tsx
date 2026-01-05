import { useEffect, useState } from "react";
import { useProducts } from "../../api/useProducts";
import ProductCard from "../../components/ProductCard";
import CustomSelect from "../../components/CustomSelect";
import Pagination from "../../components/Pagination";

const initialParams = {
    search: '',
    category: '',
    sortBy: 'asc',
    limit: 30
}

const sortOptions = [
    // {
    //     label: 'Newest',
    //     value: 'Newest'
    // },
    // {
    //     label: 'Oldest',
    //     value: 'Oldest'
    // },
    {
        label: 'Price: Low to High',
        value: 'asc'
    },
    {
        label: 'Price: High to Low',
        value: 'desc'
    },
]

type ParamsTypes = {
    search: string,
    category: string,
    sortBy: string,
    limit: number
}

type ProductDataType = {
    id: number,
    price: number,
    title: string,
    rating: number,
    thumbnail: string,
}

const Products = () => {

    // const [limit, setLimit] = useState(10)

    const [params, setParams] = useState<ParamsTypes>(initialParams)

    const { data, loading } = useProducts(params);

    const [categories, setCategories] = useState([])
    console.log(categories, 'categories')

    async function getAllCategories() {
        const response = await fetch('https://dummyjson.com/products/categories')
        try {
            if (!response) {
                throw new Error('Something went wrong')
            }
            const data = await response.json()
            let temp = []
            data?.map((item) => {
                temp.push({ label: item?.name, value: item?.slug })
            })
            setCategories(temp)
        }
        catch (e) {
            console.log(e)
        }
    }

    console.log(data, 'datasss')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setParams({
            ...params,
            [name]: value
        })
    }

    const handlePrev = () => {
        setParams({
            ...params,
            limit: params.limit - 10
        })
    }

    const handleNext = () => {
        setParams({
            ...params,
            limit: params.limit + 10
        })
    }

    const handleSetLimit = (value) => {
        setParams({
            ...params,
            limit: value
        })
    }

    useEffect(() => {
        getAllCategories()
    }, [])

    // if (loading) {
    //     return (
    //         <div className='flex flex-col items-center justify-center w-full h-screen'>
    //             Loading...
    //         </div>
    //     )
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

                    <input placeholder='Search products...' name="search" value={params?.search} onChange={handleChange} className='outline-none w-full placeholder:text-[#717182] text-sm' />

                </div>

                <div className="grid lg:grid-cols-2 lg:w-4/12 w-full gap-4">

                    <CustomSelect icon="/icons/filter.svg" label={params?.category || 'All Categories'} onChange={(value: string) => setParams({ ...params, category: value })} value={params?.category} options={categories} />

                    <CustomSelect label={params?.sortBy} onChange={(value: string) => setParams({ ...params, sortBy: value })} value={params?.sortBy} options={sortOptions} />

                </div>

            </div>

            <div className="flex flex-col gap-4 w-full">

                <p className="text-sm text-[#4A5565]">Showing {params?.limit} of {data?.total} products</p>

                <div className="grid lg:grid-cols-4 gap-6">
                    {
                        data?.products?.map((item: ProductDataType) => (
                            <ProductCard data={item} />
                        ))
                    }
                </div>

            </div>

            <Pagination
                page={params?.limit}
                total={data?.total}
                handlePrev={handlePrev}
                handleNext={handleNext}
                handleSetLimit={handleSetLimit}
            />

        </div>
    )
}

export default Products