import React, { useState } from 'react';
import WasteHeroDataDisplay from './WasteHeroDataDisplay';
import '../css/WasteHeroDataFetcher.css';

const WasteHeroDataFetcher = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [data, setData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = `https://platform-api.wastehero.io/api-crm-portal/v1/property/UHJvcGVydHlUeXBlOjQ1NDg3Mg==/collection_log?from_date=${fromDate}&to_date=${toDate}`;
    try {
      const response = await fetch(endpoint, {
        headers: {
          'X-Api-Key': apiKey
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setData(responseData);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="waste-hero-data-fetcher">
      <h2>Fetch WasteHero Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="date-inputs">
          <label>
            From Date:
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
          </label>
          <label>
            To Date:
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} required />
          </label>
        </div>
        <br />
        <label>
          API Key:
          <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {formSubmitted && <WasteHeroDataDisplay data={data} />}
    </div>
  );
};


export default WasteHeroDataFetcher;
