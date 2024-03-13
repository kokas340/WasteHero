import React from 'react';

const WasteHeroDataDisplay = ({ data }) => {
  const generateICSFile = () => {
    if (!data) return;

    let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//WasteHero//EN`;

    data.forEach((item, index) => {
      icsContent += `
BEGIN:VEVENT
UID:${index + 1}
SUMMARY:${item.container.container_type.name} - ${item.container.waste_fraction.name}
DTSTART;VALUE=DATE:${item.date.replace(/-/g, '')}
DTEND;VALUE=DATE:${item.date.replace(/-/g, '')}
DESCRIPTION:Status - ${item.status}
END:VEVENT`;
    });

    icsContent += `
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wastehero_schedule.ics';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
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
          <button onClick={generateICSFile}>Download as .ics</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WasteHeroDataDisplay;