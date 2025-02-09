import './App.css';

function App() {
  const title = 'Bem-vindo ao blog'
  const views = 50;
  const site = "https://www.bing.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Visto mais de {views} vezes</p>
        <a href={site}> Bing website</a>
      </div>
    </div>
  );
}

export default App;
