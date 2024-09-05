import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import Releases from '../components/Releases/Releases';

const page = () => {
  return (
    <div>
      <Header title="Filmy Partner" />
      USER PAGE
      <Carousel />
      <Releases />
    </div>
  );
};

export default page;
