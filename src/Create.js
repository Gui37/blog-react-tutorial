import { useState } from "react";
import usePost from "./usePost";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Dante');
    const [isAdding, setIsAdding] = useState(false);
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog ={title,body,author};
        setIsAdding(true);
            fetch('http://localhost:8000/blogs',{
                method:'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            })
                .then(()=>{
                    setIsAdding(false);
                })
                .catch(err =>{
                    if (err.name === "AbortError") {
                        console.log("POST aborted.");
                    }else{
                        setIsAdding(false);
                    }
                });
    
        console.log(blog);
    }
    return (
        <div className="create">
            <h2>Adicionar novo Blog</h2>
            <form
                onSubmit={handleSubmit}
            >
                <label>Título do Blog</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Corpo do Blog</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Autor do Blog</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Dante">Dante</option>
                    <option value="Vergil">Vergil</option>
                    <option value="Nero">Nero</option>
                    <option value="Lady">Lady</option>
                    <option value="Trish">Lady</option>
                </select>
                {!isAdding &&<button>Adicionar Blog</button>}
                {isAdding &&<button>Adicionando Blog ...</button>}
            </form>
        </div>
    );
}

export default Create;