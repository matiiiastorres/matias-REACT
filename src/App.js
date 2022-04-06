import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='Matias'>
          MATIAS TORRES
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/diego-matias-torres-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto
        </a>
      </header>
    </div>
  );
}

export default App;
