import React from 'react';
import { useEffect, useState } from "react";
import styles from './ProductCard.module.css';
import { setCart, removeCart, updateCart } from '../../store/slices/cartReducer';
import { useDispatch, useSelector } from 'react-redux';


export default function ProductCard({id, image, name, describtion, price}) {
  const [inCart, setInCart] = useState(false);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const userOrder = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(updateCart({
      id: id,
      cartAmount: amount,
      cartPrice: price * amount,
    }));
  }, [amount]);

  useEffect(() => {
    if (!userOrder.active) setInCart(false);
  }, [userOrder.active]);

  const MinAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
    else {
      setInCart(false);
      setAmount(0);
      dispatch(removeCart({id: id}));
    }
  }


  return (
    <div className={styles.card}>
        <img src={image}></img>
        <h3>{name}</h3>
        <p>{describtion}</p>
        <h4>{price} &#x20bd;</h4>

        {inCart ? 
          <div className={styles.amount_buttons}>
              <button onClick={() => MinAmount()}>-</button>
              <span>{amount}</span>
              <button onClick={() => setAmount(amount + 1)}>+</button>
          </div>
          : 
          <button 
            className={styles.buy_btn}
            onClick={() => {
              setInCart(true);
              setAmount(1);

              dispatch(setCart({
                id: id,
                cartName: name,
                cartAmount: 1,
                cartPrice: price,
              }));
            }}>Купить</button>
          }
    </div>
  )
}
