import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

export default function App() {
   return (
      <div className="app">
         <Navbar />

         <div className="content">
            <Home />
         </div>
      </div>
   );
}
