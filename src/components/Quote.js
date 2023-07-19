import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    const url = 'https://api.api-ninjas.com/v1/quotes?category=alone';
    const apiKey = 'NkjjWSpsKonHJ0hehbM1jA==V0G8m5K5tp1eejqN';
    const headers = {
      'X-Api-Key': apiKey,
    };
    const response = await fetch(url, { headers });
    const data = await response.json();
    if (response.status === 200) {
      setQuote(data[0]);
      setLoading(false);
    } else {
      setError('Error fetching quote data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }
  return (
    <div className="quote-container">
      <p>
        &quot;
        {quote.quote}
        &quot;
      </p>
      <h4>{quote.author}</h4>
    </div>
  );
};

export default Quotes;
