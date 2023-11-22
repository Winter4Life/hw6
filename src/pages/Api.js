import React, { useState } from "react";
import Axios from "axios";

function Api() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
      const res = await Axios.get("https://api.kanye.rest/");
      setQuote(res.data.quote);

  };

  return (
    <div>
      <p>{quote}</p>
      <button onClick={fetchQuote}>
        What is something Kanye has said?
      </button>
    </div>
  );
}

export default Api;