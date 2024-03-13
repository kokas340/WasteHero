import React from 'react';
import Navbar from '../components/Navbar';
import WasteHeroDataFetcher from '../components/WasteHeroDataFetcher';

function HomePage() {
  return (
    <>
      <Navbar />

      <div>Waste Calander</div>
      <WasteHeroDataFetcher />
    </>


  );
}

export default HomePage;