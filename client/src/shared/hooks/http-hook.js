import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequset = useCallback(
    async (url, method = 'GET', headers = {}, body = null) => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        return responseData;
      } catch (err) {
        setError(err.message || 'Something went wrong, please try again.');
      }
      setIsLoading(false);
    }, []);

    const clearError = () => {
      setError(null);
    };

    useEffect(() => {
      return () => {
        activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort())
      }
    }, [])
  
    return { isLoading, error, sendRequset, clearError };
};