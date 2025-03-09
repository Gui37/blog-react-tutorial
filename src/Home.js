import { useState } from "react";
const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title:'First One',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur accusamus minima',author:'Dante',id:1},
        {title:'Second One',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur accusamus minima',author:'Sparda',id:2},
        {title:'Third One',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur accusamus minima',author:'Nero',id:3},
        {title:'Last One',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur accusamus minima',author:'Vergil',id:4}
    ]);
    return(
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>

                    <h2>{blog.title}</h2>
                    <p>Escrito por: {blog.author}</p>
                </div>
            ))}            
        </div>
    );
}

export default Home; 