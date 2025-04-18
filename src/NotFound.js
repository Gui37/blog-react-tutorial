import { Link } from "react-router-dom";

const NotFound = () =>{
return(
    <div className="not-found">
        <h1>404! Not Found</h1>
        <h2>Mil Desculpas!</h2>
        <h3>A página que estás a procura não existe.</h3>
        <Link to="/"> Voltar para a página inicial.</Link>
    </div>
)
}
export default NotFound;