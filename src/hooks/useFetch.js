import { useState, useEffect } from 'react';

export function useFetch(url) {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      setTimeout(() => {
         fetch(url)
            .then((response) => {
               if (!response.ok) {
                  throw Error('Could not fetch the data from that resource');
               }

               return response.json();
            })
            .then((data) => {
               setData(data);
               setIsLoading(false);
               setError(null);
            })
            .catch((err) => {
               setError(err.message);
               setIsLoading(false);
            });
      }, 1000);
   }, [url]);

   return { data, isLoading, error };
}
