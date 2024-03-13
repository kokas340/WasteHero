import React from 'react';
import generateICSFile from '../backend/generateICSFile';
const WasteHeroDataDisplay = ({ data }) => {
  const generateICS = () => {
    generateICSFile(data);
  };

  return (
    <div className="waste-hero-data-container">
      <h2>Data from WasteHero API:</h2>
      {data ? (
        <>
          {data.map((item, index) => (
            <div className="waste-hero-item" key={index}>
              <h3>Item {index + 1}</h3>
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Status:</strong> {item.status}</p>
              {item.container && (
                <>
                  <p><strong>Container Type:</strong> {item.container.container_type.name}</p>
                  <p><strong>Waste Fraction:</strong> {item.container.waste_fraction.name}</p>
                  <p><strong>Pickup Setting:</strong> {item.container.pickup_setting.name}</p>
                </>
              )}
              {!item.container && (
                <p><strong>No container information available</strong></p>
              )}
            </div>
          ))}
          <button onClick={generateICS}>Download as .ics</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WasteHeroDataDisplay;