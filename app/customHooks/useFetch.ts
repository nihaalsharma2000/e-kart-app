import React from "react";

export default function useFetch() {
  let data = null;
  const fetchData = async (url: string) => {
    try {
      const res = await fetch(url);
      data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return {fetchData};
}
