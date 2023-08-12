import { useState, useEffect } from "react";

const useFetchData = (url, cb) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (cb) {
        setData(cb(result));
      } else {
        setData(result);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };
  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
