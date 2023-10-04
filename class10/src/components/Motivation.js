import axios from "axios";
import { useState, useEffect } from "react";

export const Motivation = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((res) => setQuotes(res.data));
  });

  return (
    <div>
      <h1>Motivation!</h1>
      {quotes.map((quote, i) => {
        return (
          <div key={i}>
            <hr />
            <h3>{quote.text}</h3>
            <p>Said by the great {quote.author}</p>
          </div>
        );
      })}
    </div>
  );
};
