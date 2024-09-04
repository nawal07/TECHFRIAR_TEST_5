import React from 'react';
import styles from './Releases.module.css';
import Image from 'next/image';

const movieData = [
  { title: 'GOAT', genre: 'Action', poster: '/POSTER-1.jpg' },
  { title: 'ARM', genre: 'Action', poster: '/POSTER-2.jpg' },
  { title: 'Vazha', genre: 'Comedy', poster: '/POSTER-3.jpg' },
  { title: 'Stree 2', genre: 'Comedy/Horror', poster: '/POSTER-4.jpg' },
  { title: 'Deadpool & Wolverine', genre: 'Comedy/Action', poster: '/POSTER-5.jpg' },
];

const Releases: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>Latest Releases</h1>
      <div className={styles.releases}>
        {movieData.map((movie, index) => (
          <div key={index} className={styles.releaseCard}>
            <Image
              src={movie.poster}
              alt={`Poster of ${movie.title}`}
              width={200}
              height={300}
              className={styles.releasePoster}
            />
            <h2 className={styles.releaseTitle}>{movie.title}</h2>
            <h3 className={styles.releaseGenre}>{movie.genre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Releases;
