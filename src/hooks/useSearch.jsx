import { useState } from "react";
import { BASE_URL } from "../BASE_URL";

const useSearch = () => {
  const [result, setResult] = useState();
  
  const request = async (link) => {
    const url = `${BASE_URL}?url=${link}`;
    
    if (link) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.ok && data.result) {
          setResult(data.result.full_short_link);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return { request, result };
};

export default useSearch;