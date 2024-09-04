import React from 'react';
import styles from './page.module.css';
import Header from './components/Header/Header';
import Link from 'next/link';
import Carousel from './components/Carousel/Carousel';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header title="Filmy Partner" />
      {/* <Link href={'/Admin'}>Click here</Link> */}
      <Carousel/>
    </main>
  );
};

export default Home;
