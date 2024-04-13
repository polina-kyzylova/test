import React from 'react';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';


export default function Products () {
  const globalCart = useSelector((state) => state.cart);

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p>Название</p>
            <p>Количество</p>
            <p>Цена</p>
        </div>

        <div className={styles.cart_container}>
          {globalCart.map((row) => (
            <div className={styles.products} key={row.id}>
              <p className={styles.item_name}>{row.cartName}</p>
              <p>{row.cartAmount} шт.</p>
              <p>{row.cartPrice} &#x20bd;</p>
            </div>
          ))}
        </div>

    </div>
  );
}


/*
              <button className={styles.product_btn}
              onClick={() => {
                dispatch(removeCart({id: row.id}));
              }}>X</button>
*/