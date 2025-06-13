import { useState } from 'react';

export function CreateBlog() {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [author, setAuthor] = useState('mario');

   return (
      <div className="create">
         <h2>Add new blog</h2>
         <form>
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

            <button>Add Blog</button>
         </form>
      </div>
   );
}
