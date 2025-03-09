const Home = () =>{
    const handleClick = () => {
        console.log("Hello There");
    }
    const handleClickAgain = (name) =>{
        console.log("Hello There! "+ name)
    }
    return(
        <div className="home">
            <h1>Página Inicial</h1>
            <button onClick={handleClick}>Clique aqui!</button>
            <button onClick={() =>handleClickAgain("Antonio")}>Clique Aqui Denovo</button>
        </div>
    );
}

export default Home; 