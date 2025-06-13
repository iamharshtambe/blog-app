import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateBlog() {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [author, setAuthor] = useState('Harsh');
   const [isloading, setIsLoading] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      const blog = { title, content, author };

      setIsLoading(true);

      fetch('http://localhost:8000/blogs', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(blog),
      }).then(() => {
         setIsLoading(false);
         navigate('/');
      });
   };

   return (
      <div className="create">
         <h2>Add new blog</h2>
         <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input
               type="text"
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />

            <label>Blog Content:</label>
            <textarea
               required
               value={content}
               onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <label>Blog Author:</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
               <option value="Harsh">Harsh</option>
               <option value="Sumit">Sumit</option>
            </select>

            {!isloading && <button>Add Blog</button>}
            {isloading && <button disabled>Adding Blog...</button>}
         </form>
      </div>
   );
}
