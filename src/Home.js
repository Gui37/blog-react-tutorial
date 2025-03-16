import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () =>{
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    return(
        <div className="home">
            {error && <div> { error } </div>}
            {isLoading && <div>Carregando os Dados . . .</div>}
            {blogs && <BlogList blogs={blogs} title ='All the blogs' />}
        </div>
    );
}

export default Home; 