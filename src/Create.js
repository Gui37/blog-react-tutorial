import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Dante');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog ={title,body,author};
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
                <button>Adicionar Blog</button>
            </form>
        </div>
    );
}

export default Create;