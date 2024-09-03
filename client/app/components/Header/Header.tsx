import React from 'react';
import styles from './Header.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        {title}
        <Input
          placeholder="Search movies here ..."
          padding="12px 28px"
          width="480px"
          fontSize="15px"
        />
      </div>
      <Button
        backgroundColor="#9d2525"
        color="white"
        borderRadius="5px"
        padding="7px 12px"
        text="Sign In"
        fontSize="12px"
        fontWeight="600"
      />
    </div>
  );
};

export default Header;
