import React, { useState } from 'react';
import styles from './ProductCard.module.css';
import shimp from './chimp 1.png';


export default function ProductCard({name, describtion, price}) {
  const [inCart, setInCart] = useState(false);
  const [amount, setAmount] = useState(0);
  let am = 0;

  const changeAmount = (flag) => {
    if (flag === '+') {
        am += 1;
        setAmount(am);
    } else {
        if (am != 0) {
            am -= 1;
            setAmount(am);
        } else {
            setInCart(false);
        }
    }
  }


  return (
    <div className={styles.card}>
        <img src={shimp}></img>
        <h3>{name}</h3>
        <p>{describtion}</p>
        <h3>{price} &#x20bd;</h3>

        {inCart ? <div className={styles.amount_buttons}>
            <button>-</button>
            <span>{amount}</span>
            <button>+</button>
        </div>
        : 
        <button className={styles.buy_btn} onClick={setInCart(true)}>Купить</button>}
    </div>
  )
}
