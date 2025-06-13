import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export function BlogDetails() {
   const { id } = useParams();
   let navigate = useNavigate();

   const {
      data: blog,
      isLoading,
      error,
   } = useFetch('http://localhost:8000/blogs/' + id);

   const handleDelete = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
         method: 'DELETE',
      }).then(() => {
         navigate('/');
      });
   };

   return (
      <div className="blog-details">
         {error && <div>{error}</div>}
         {isLoading && <div>Loading...</div>}
         {blog && (
            <article>
               <h2>{blog.title}</h2>
               <p>Written by {blog.author}</p>
               <div>{blog.body}</div>
               <button onClick={handleDelete}>Delete</button>
            </article>
         )}
      </div>
   );
}
