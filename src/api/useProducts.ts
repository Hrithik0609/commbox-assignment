import { useState, useEffect } from "react";

export const useProducts = (params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    } catch (err) {
      setError(err.message || "Something went wrong");
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
