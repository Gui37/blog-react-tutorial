import { useState } from "react";
const Home = () =>{
    const [name, setName] = useState('The Name is Dante');
    const [value, setValue] = useState('and It Has ' + 0 + ' Chance to Defeat Me!');
    const handleClick = () => {
        setName('The Name is Vergil');
        setValue('and It Has ' + Math.random() + ' Chance to Defeat Me!');
    }
    return(
        <div className="home">
            <p>{name} {value}</p>
            <h1>Página Inicial</h1>
            <button onClick={handleClick}>Clique aqui!</button>
        </div>
    );
}

export default Home; 