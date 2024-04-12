import React from 'react';
import styles from './Products.module.css';


export default function Products () {
  function createData(name, amount, price) {
    return { name, amount, price };
  }
      
  const rows = [
    createData('Product 1', 1, 333),
    createData('Product 2', 2, 555),
  ];

  return (
    <div className={styles.container}>
        <div className={styles.products}>
            <p className={styles.header}>Название</p>
            <p className={styles.header}>Количество</p>
            <p className={styles.header}>Цена</p>
        </div>

        {rows.map((row) => (
          <div className={styles.products} key={row.name}>
            <p>{row.name}</p>
            <p>{row.amount} шт.</p>
            <p>{row.price} &#x20bd;</p>
            <button className={styles.product_btn}>X</button>
          </div>
        ))}
    </div>
  );
}
