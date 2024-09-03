import React from 'react';
import styles from './page.module.css';
import Header from './components/Header/Header';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header title="Filmy Partner" />
      
    </main>
  );
};

export default Home;
