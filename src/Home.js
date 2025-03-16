import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () =>{
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res =>{
                if(!res.ok){
                    throw Error('Não foi possível buscar os dados da fonte');
                }
                return res.json()
            })
            .then(data =>{
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err =>{
                setIsLoading(false);
                setError(err.message);
            })
    },[]);
    return(
        <div className="home">
            {error && <div> { error } </div>}
            {isLoading && <div>Carregando os Dados . . .</div>}
            {blogs && <BlogList blogs={blogs} title ='All the blogs' />}
        </div>
    );
}

export default Home; 