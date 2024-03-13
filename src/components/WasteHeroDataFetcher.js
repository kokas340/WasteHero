import React, { useState, useEffect } from 'react';
import '../css/WasteComponent.css'
const WasteHeroDataFetcher = () => {
  const [data, setData] = useState(null);
  const apiKey = '9f291345-7cd6-4dea-b762-8c83f44b7957';
  const endpoint = 'https://platform-api.wastehero.io/api-crm-portal/v1/property/UHJvcGVydHlUeXBlOjQ1NDg3Mg==/collection_log?from_date=2024-03-01&to_date=2024-03-31';

  useEffect(() => {
    const fetchData = async () => {
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="waste-hero-data-container"> {/* Apply container class */}
      <h2>Data from WasteHero API:</h2>
      {data ? (
        data.map((item, index) => (
          <div className="waste-hero-item" key={index}> {/* Apply item class */}
            <h3>Item {index + 1}</h3>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Container Type:</strong> {item.container.container_type.name}</p>
            <p><strong>Waste Fraction:</strong> {item.container.waste_fraction.name}</p>
            <p><strong>Pickup Setting:</strong> {item.container.pickup_setting.name}</p>
            {/* Render other properties here as needed */}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default WasteHeroDataFetcher;
