import React, { useContext } from 'react';

import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  // 1st Alternative
  // const price = `€${props.meal.price.toFixed(2)}`;

  // 2nd Alternative
  const price = `€${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles['meal']}>
      <div id={props.id} key={props.id}>
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
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
