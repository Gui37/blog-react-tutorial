import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () =>{
    const {id}  = useParams();
    const {data:blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' +id);
    const history = useHistory();
    const handleApagar = ()=>[
        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method:"DELETE"
        }).then(() =>{
            history.pushState("/");
        })
    ]
    return(
<div className="blog-details">
{isLoading && <div>Carregando os Dados . . .</div>}
{error && <div>{error}</div>}
{blog && (
    <article>
        <h2>{blog.title}</h2>
        <p>Escrito Por: {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleApagar}>Apagar Blog</button>
    </article>
)}
</div>
    );
}

export default BlogDetails;