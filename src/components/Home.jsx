import { useEffect, useState } from 'react';
import { BlogList } from './BlogList';

export function Home() {
   const [blogs, setBlogs] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      setTimeout(() => {
         fetch('http://localhost:8000/blogs')
            .then((response) => {
               if (!response.ok) {
                  throw Error('Could not fetch the data from that resource');
               }

               return response.json();
            })
            .then((data) => {
               setBlogs(data);
               setIsLoading(false);
               setError(null);
            })
            .catch((err) => {
               setError(err.message);
               setIsLoading(false);
            });
      }, 1000);
   }, []);

   return (
      <div className="home">
         {error && <div>{error}</div>}
         {isLoading && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title={'All Blogs!'} />}
      </div>
   );
}
