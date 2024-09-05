import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

interface HeaderProps {
  title: string;
  islogged: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, islogged }) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        {title}
        <div className={styles.search}>
          <Image
            src={'/search.png'}
            alt="search icon"
            width={18}
            height={18}
            className={styles.searchIcon}
          />
          <Input
            placeholder="Search movies here ..."
            padding="12px 32px"
            width="480px"
            fontSize="15px"
          />
        </div>
      </div>
      {islogged ? (
        <p>Hello User</p>
      ) : (
        <Button
          backgroundColor="#9d2525"
          color="white"
          borderRadius="5px"
          padding="7px 12px"
          text="Sign In"
          fontSize="12px"
          fontWeight="600"
        />
      )}
    </div>
  );
};

export default Header;
