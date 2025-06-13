import { Link } from 'react-router-dom';

export function Navbar() {
   return (
      <div className="navbar">
         <h1>Friend's Blog</h1>

         <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
         </div>
      </div>
   );
}
