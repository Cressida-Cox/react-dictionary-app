import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiKey = "1o43608b39b277t598744bfa6da74ca4";
    let apiURl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autofocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
