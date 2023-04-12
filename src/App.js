import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>📚 Dictionary 📚</h1>
        </header>

        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/Cressida-Cox/react-dictionary-app.git"
              target="_blank"
              rel="noreferrer"
            >
              Coded by Cressida Cox
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
