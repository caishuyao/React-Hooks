import { useState, useEffect } from "react";

// http://numbersapi.com/43/trivia
const useFetch = (url) => {
  const [response, setResponse] = useState({ data: null, loading: true });
  useEffect(() => {
    setResponse({ data: null, loading: true });
    fetch(url)
      .then((x) => x.text())
      .then((text) => {
        setResponse({ data: text, loading: false });
        console.log(text);
      });
  }, [url]);
  return response;
};

export default useFetch;
