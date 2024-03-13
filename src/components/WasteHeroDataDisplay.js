import React from 'react';
import generateICSFile from '../backend/generateICSFile';
import '../css/WasteHeroDataDisplay.css';

const WasteHeroDataDisplay = ({ data }) => {
  const generateICS = () => {
    generateICSFile(data);
  };

  return (
    <div className="waste-hero-data-container">
      <div className="header-container">
        <h2>Data from WasteHero API:</h2>
        <button className="download-button" onClick={generateICS}>Download as .ics</button>
      </div>
      <div className="waste-hero-cards-container">
        {data ? (
          data.map((item, index) => (
            <div className="waste-hero-card" key={index}>
              <div className='header-container'>
                <h4> {item.date}</h4>
                <p># {index + 1}</p>
              </div>
              {item.container ? (
                <>
                  <p><strong>Container Type:</strong> {item.container.container_type.name}</p>
                  <p><strong>Waste Fraction:</strong> {item.container.waste_fraction.name}</p>
                  <p><strong>Pickup Setting:</strong> {item.container.pickup_setting.name}</p>
                </>
              ) : (
                <p><strong>No container information available</strong></p>
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default WasteHeroDataDisplay;