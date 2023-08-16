import React, { Fragment } from 'react';

import styles from './Header.module.css';
import imageMeals from '../../assets/meals.jpg';

import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <Fragment>
      <header className={styles['header']}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={imageMeals} alt="A table with a lot of food" />
      </div>
    </Fragment>
  );
};

export default Header;
