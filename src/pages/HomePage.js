import React from 'react';
import Navbar from '../components/Navbar';
import WasteHeroDataFetcher from '../components/WasteHeroDataFetcher';

function HomePage() {
  return (
    <div className='container'>
      <Navbar />
      <div>Waste Calander</div>
      <WasteHeroDataFetcher />
    </div>
  );
}

export default HomePage;