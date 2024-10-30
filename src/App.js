import logo from "./logo.svg";
import "./App.css";
import packageInfo from "../package.json";

function App() {
  console.log(version);
  // regular commit
  // hotfix commit

  return (
    <div className="App">
      <header className="App-header-release">
        <img src={logo} className="App-logo-main" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={`version-${data.version}`}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    //hotfix 2
  );
}

App.version = packageInfo.version;

export default App;
