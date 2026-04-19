import { useEffect, useState } from "react";

export default function useFetch(apiCall) {
  const [data, setData] = useState(null);

  useEffect(() => {
    apiCall().then(setData);
  }, []);

  return data;
}