import MostrarBlogs from './blog/MostrarBlogs';
import EditarBlog from './blog/EditarBlog';
import CrearBlog from './blog/CrearBlog';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element ={<MostrarBlogs />}/>
      <Route path="/edit/:id" element ={<EditarBlog />}/>
      <Route path="/create" element ={<CrearBlog />}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
