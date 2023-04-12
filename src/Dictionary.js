import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiURl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What are you looking for?</h1>
        <form onSubmit={search}>
          <input
            type="search"
            autofocus={true}
            placeholder="Search for a word..."
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          Suggested words: exonerate, maundy, obliteration, suavity...
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
