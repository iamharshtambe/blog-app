import { BlogList } from './BlogList';
import { useFetch } from '../hooks/useFetch';

export function Home() {
   const {
      data: blogs,
      isLoading,
      error,
   } = useFetch('http://localhost:8000/blogs');

   return (
      <div className="home">
         {error && <div>{error}</div>}
         {isLoading && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title={'All Blogs!'} />}
      </div>
   );
}
