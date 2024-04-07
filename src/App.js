import logo from './logo.svg';
import './App.css';

function App() {

  function sendDataToAndroid(info) {
    console.log(info);
    window.AndroidInterface.sendDataToNative(info);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => sendDataToAndroid("{'message': 'Hi Jo, It from web page'}")}>Send</button>
      </header>
    </div>
  );
}

export default App;
