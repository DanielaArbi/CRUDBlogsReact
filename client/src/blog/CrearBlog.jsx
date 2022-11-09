import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

const URI = "http://localhost:8000/blogs/";

const CrearBlog = ()=>{
    const[title,setTitle] = useState('');
    const [contenido,setContenido] = useState('');
   
    const navigate = useNavigate();

    const crearBlog = async (e)=>{
       e.preventDefault();
       await axios.post(URI,{
        title : title,
        content : contenido
       })
       navigate('/');
    }

    return(
        <div className='col-12 d-flex flex-column  align-items-center'>
    <div className='col-12 d-flex align-items-center  mt-5'>
       <Link to="/"><i className="fa-solid fa-arrow-left fs-5 ms-5" title='volver'></i></Link>  
        
       </div>
       <h3 className='text-primary'>Crear Blog</h3>
    <form onSubmit={crearBlog} className='col-5 mt-4 d-flex flex-column align-items-center '>

       <div className='mb-3 col-10'>
        <label htmlFor="form-label">Titulo</label>
        <input className='form-control my-3' type="text" value={title} onChange={e=>setTitle(e.target.value)} />
         <label htmlFor="">Contenido</label>
         <textarea 
         className='form-control my-3'
         type="text"
         value={contenido}
         onChange={e=>setContenido(e.target.value)}/>
         
       </div>
       <button type='submit' className='btn btn-primary col-3'>Guardar</button>
    </form>
</div>
    )
}

export default CrearBlog;