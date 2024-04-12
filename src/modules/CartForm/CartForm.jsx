import React from 'react';
import styles from './CartForm.module.css';
import Products from '../../components/Products/Products';
import PhoneInput from '../../components/PhoneInput';


export default function CartForm() {
  return (
    <div className={styles.form}>
        <h2>Добавленные товары</h2>

        <Products />

        <div className={styles.form_buttons}>
            <PhoneInput />
            <button className={styles.order}>Заказать</button>
        </div>
    </div>
  )
}
