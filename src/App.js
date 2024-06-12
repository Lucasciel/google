import logo from './logo.svg';
import './App.css';
import Nav from './Componentes/section/Nav.js'
import Pesquisa from './Componentes/section/Pesquisa.js'
import Footer from './Componentes/section/Footer.js'

function App() {
  return (
    <div className="App">
      <header><Nav/></header>
      <main><Pesquisa/></main>
      <footer><Footer/></footer>
      
      
      
    </div>
  );
}

export default App;
