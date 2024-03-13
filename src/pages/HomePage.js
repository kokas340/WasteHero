import React from 'react';
import Navbar from '../components/Navbar';
import WasteHeroDataFetcher from '../components/WasteHeroDataFetcher';

function HomePage() {
  return (
    <>
      <Navbar />

     
      <WasteHeroDataFetcher />
    </>


  );
}

export default HomePage;