// src/hooks/useProducts.ts

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface UseProductsParams {
  limit?: number;
  skip?: number;
  select?: string;
}

interface UseProductsReturn {
  data: ProductsResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useProducts = (params: UseProductsParams = {}): UseProductsReturn => {
  const [data, setData] = useState<ProductsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const queryString = new URLSearchParams(
        params as Record<string, string>
      ).toString();
      const url = queryString 
        ? `https://dummyjson.com/products?${queryString}` 
        : 'https://dummyjson.com/products';
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ProductsResponse = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [JSON.stringify(params)]);

  const refetch = () => {
    fetchProducts();
  };

  return { data, loading, error, refetch };
};