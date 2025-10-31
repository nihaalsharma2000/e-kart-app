import { useCallback } from "react";

export default function useFetch() {
  const fetchData = useCallback(async (url: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch ${url}: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }, []);
  return { fetchData };
}
