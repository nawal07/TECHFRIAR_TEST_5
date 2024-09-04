import React from 'react';
import styles from './page.module.css';
import Header from './components/Header/Header';
import Link from 'next/link';
import Carousel from './components/Carousel/Carousel';
import Releases from './components/Releases/Releases';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header title="Filmy Partner" />
      {/* <Link href={'/Admin'}>Click here</Link> */}
      <Carousel/>
      <Releases/>
    </main>
  );
};

export default Home;
