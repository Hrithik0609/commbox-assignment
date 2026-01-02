import { useState, useEffect } from 'react';

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

type ProductInfoTypes = {
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

export const useProduct = (id: string) => {
  const [data, setData] = useState<ProductInfoTypes>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();

  const fetchProduct = async () => {
    if (!id) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`https://dummyjson.com/products/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error, 'error')
      setError('Failed to fetch product');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return {
    data,
    loading,
    error,
    refetch: fetchProduct
  };
};