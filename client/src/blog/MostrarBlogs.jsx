import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = "http://localhost:8000/blogs/";

const MostrarBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
    }, [])

    const getBlogs = async () => {
        await axios.get(URI)
            .then((res) => {
                const blogsitos = res.data;
                setBlogs(blogsitos);
            })
    }

    //procedimiento para eliminar un blog
     const deleteBlog = async(id)=>{
       await axios.delete(URI+id)
       getBlogs();
     }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='col-12 d-flex my-4'>
                    <small className='fs-3 me-3 text-warning d-flex align-items-center'>CREAR BLOG </small>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    </div>
                
                    <table className='table'>
                        <thead className='table-primary'>
                        <tr>
                            <th>id</th>
                            <th>titulo</th>
                            <th>contenido</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blogs.map(blog => (
                            <tr key={blog.id}>

                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.content}</td>
                                <td>
                                <Link to={`/edit/${blog.id}`} className='btn btn-info me-2'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteBlog(blog.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        ))}
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}
export default MostrarBlogs;