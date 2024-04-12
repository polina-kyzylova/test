import React from 'react';
import styles from './CartForm.module.css';
import Products from '../../components/Products/Products';


export default function CartForm() {
  return (
    <div className={styles.form}>
        <h2>Добавленные товары</h2>

        <Products />
        
    </div>
  )
}
