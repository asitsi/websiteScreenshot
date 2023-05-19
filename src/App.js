import './App.css';
import { useState } from 'react';

function App() {
  const [websiteUrl, setWebsiteUrl] = useState('https://asitsi.github.io/potfolio/');
  
  return (
    <div className="App">
      <header className="App-header">
        {websiteUrl && (
          <img src={`https://api.urlbox.io/v1/T6LcLYJSQb9WkOPJ/jpg?url=${websiteUrl}`} className="App-logo" alt="logo" />
        )}        
        <p>
          My <code>Pofolio website Url</code> to show screenshot to it.
        </p>
        <a
          className="App-link"
          href="https://asitsi.github.io/potfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Potfolio
        </a>
      </header>
    </div>
  );
}

export default App;
