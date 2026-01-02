import { useState, useEffect } from "react";

type DimensionTypes = {
  width: number,
  height: number,
  depth: number,
}

type ReviewsTypes = {
  comment: string,
  date: string,
  rating: number,
  reviewerEmail: string,
  reviewerName: string
}

type ProductDataTypes = {
  id: number,
  thumbnail: string,
  category: string,
  availabilityStatus: string,
  title: string,
  description: string,
  rating: number,
  price: number,
  brand: string,
  sku: string,
  stock: number,
  weight: number,
  dimensions: DimensionTypes,
  tags: Array<string>,
  reviews: ReviewsTypes[],
  warrantyInformation: string,
  shippingInformation: string,
  returnPolicy: string
}

type DataTypes = {
  products: ProductDataTypes[],
  limit: number,
  skip: number,
  total: number
}

type ParamsTypes = {
  search?: string,
  category?: string,
  sortBy?: string,
}

export const useProducts = (params: ParamsTypes) => {
  const [data, setData] = useState<DataTypes>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // const queryString = new URLSearchParams(params).toString();
      const url = params
        ? `https://dummyjson.com/products/search?q=${params?.search}`
        : "https://dummyjson.com/products";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error, 'error')
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [JSON.stringify(params)]);

  const refetch = () => fetchProducts();

  return { data, loading, error, refetch };
};
