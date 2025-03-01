const Navbar =() =>{
    return (
        <nav className="navbar">
            <h1>O Blog de Tutorial</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create"style={{
                    color:"white",
                    backgroundColor:"red",
                    borderRadius:"8px"
                }}>Novo Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;