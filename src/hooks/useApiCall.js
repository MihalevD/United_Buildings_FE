import { useState, useEffect } from "react";

const useApiCall = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error };
};

export default useApiCall;
