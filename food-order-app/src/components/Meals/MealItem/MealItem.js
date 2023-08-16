import React from 'react';

import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  // 1st Alternative
  // const price = `€${props.meal.price.toFixed(2)}`;

  // 2nd Alternative
  const price = `€${props.price.toFixed(2)}`;

  return (
    <li className={styles['meal']}>
      <div>
        {/* First Alternative */}
        {/* <h3>{props.meal.name}</h3>
        <div className={styles['description']}>{props.meal.description}</div>
        <div className={styles['price']}>{props.meal.price}</div> */}

        {/* 2nd Alternative */}
        <h3>{props.name}</h3>
        <div className={styles['description']}>{props.description}</div>
        <div className={styles['price']}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
