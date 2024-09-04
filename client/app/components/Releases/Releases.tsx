'use client';
import React, { useState } from 'react';
import styles from './Releases.module.css';
import Image from 'next/image';

const movieData = [
  { title: 'GOAT', genre: 'Action', poster: '/POSTER-1.jpg' },
  {
    title: 'Deadpool & Wolverine',
    genre: 'Comedy/Action',
    poster: '/POSTER-5.jpg',
  },
  { title: 'Vazha', genre: 'Comedy', poster: '/POSTER-3.jpg' },
  { title: 'ARM', genre: 'Action', poster: '/POSTER-2.jpg' },
  { title: 'Stree 2', genre: 'Comedy/Horror', poster: '/POSTER-4.jpg' },
  { title: 'Vedaa', genre: 'Action', poster: '/POSTER-6.jpg' },
  { title: 'Crow', genre: 'Horror', poster: '/POSTER-7.jpg' },
  { title: 'It Ends With Us', genre: 'Romance', poster: '/POSTER-9.jpg' },
  { title: 'Khel Khel Mein', genre: 'Comed', poster: '/POSTER-8.jpg' },
];

const Releases: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < movieData.length - 5) {
      setCurrentIndex(currentIndex + 5);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 5);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Latest Releases</h1>
      <div className={styles.slider}>
        <div className={styles.releases}>
          {currentIndex > 0 && (
            <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
              ❮
            </button>
          )}
          {movieData
            .slice(currentIndex, currentIndex + 5)
            .map((movie, index) => (
              <div key={index} className={styles.releaseCard}>
                <Image
                  src={movie.poster}
                  alt={`Poster of ${movie.title}`}
                  width={230}
                  height={340}
                  className={styles.releasePoster}
                />
                <h2 className={styles.releaseTitle}>{movie.title}</h2>
                <h3 className={styles.releaseGenre}>{movie.genre}</h3>
              </div>
            ))}
          {currentIndex < movieData.length - 5 && (
            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
            ❯
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Releases;
