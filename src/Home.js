import { useState } from "react";
import BlogList from "./BlogList";
const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title:'First One',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur accusamus minima',author:'Dante',id:1},
        {title:'Second One',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur accusamus minima',author:'Sparda',id:2},
        {title:'Third One',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur accusamus minima',author:'Dante',id:3},
        {title:'Last One',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur accusamus minima',author:'Vergil',id:4}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    return(
        <div className="home">
            <BlogList blogs={blogs} title ='All the blogs' handleDelete={handleDelete}/>            
        </div>
    );
}

export default Home; 