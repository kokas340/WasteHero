const generateICSFile = (data) => {
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

  export default generateICSFile;