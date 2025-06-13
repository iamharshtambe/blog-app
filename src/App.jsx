import './index.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateBlog } from './components/CreateBlog';
import { BlogDetails } from './components/BlogDetails';
import { NotFound } from './components/NotFound';

export default function App() {
   return (
      <Router>
         <div className="app">
            <Navbar />

            <div className="content">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/create" element={<CreateBlog />} />
                  <Route path="/blogs/:id" element={<BlogDetails />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </div>
         </div>
      </Router>
   );
}
