import { Link } from "react-router-dom";

const Navbar =() =>{
    return (
        <nav className="navbar">
            <h1>O Blog de Tutorial</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create"style={{
                    color:"white",
                    backgroundColor:"red",
                    borderRadius:"8px"
                }}>Novo Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;