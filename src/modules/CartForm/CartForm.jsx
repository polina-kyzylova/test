import React, { useEffect, useState } from 'react';
import styles from './CartForm.module.css';
import Products from '../../components/Products/Products';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../../store/slices/orderReducer';



export default function CartForm() {
  const [tel, setTel] = useState('');
  const [valid, setValid] = useState(true);
  const [resSum, setResSum] = useState(0);
  const globalCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const setPhone = (e) => {
    setTel(e.target.value);
  }

  const validation = () => {
    (tel.length != 16) ? setValid(false) : setValid(true);
    if (resSum === 0) document.getElementById('no_items').style.color = '#E65659';
  }

  function showOrder() {
    if (!valid || !resSum) {
      validation();
    } else {
      dispatch(createOrder({
        active: true,
        resultSum: resSum,
        resultPhone: tel,
      }));
    }
  }

  useEffect(() => {
    let sum = 0;
    globalCart.map(item => {
      sum += item.cartPrice;
    })
    setResSum(sum);
  }, [globalCart]);


  return (
    <div className={styles.form}>
        <h2>Добавленные товары</h2>

        {resSum ? <Products /> : <p className={styles.no_items} id='no_items'>Нет товаров</p>}

        {resSum ? <div className={styles.result}>
          <p>Итого:</p>
          <p>{resSum} &#x20bd;</p>
        </div> : null}

        <div className={styles.form_buttons}>
          <div className={styles.val_btns}>
            <PhoneInput setPhone={setPhone} valid={valid} />
            <button className={styles.order} onClick={() => showOrder()}>Заказать</button>
          </div>

          {valid ? null : <p className={styles.invalid_phone}>Неверный телефон</p>}
        </div>
    </div>
  )
}
