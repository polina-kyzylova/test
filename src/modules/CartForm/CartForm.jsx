import React, { useEffect, useState } from 'react';
import styles from './CartForm.module.css';
import Products from '../../components/Products/Products';
import InputMask from 'react-input-mask'
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../../store/slices/orderReducer';



export default function CartForm() {
  const [valid, setValid] = useState(true);
  const [userPhone, setUserPhone] = useState('   ');
  const [resSum, setResSum] = useState(0);

  const globalCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const url = 'http://o-complex.com:1337/order';

  
  const sentOrder = async (userCart, cleanPhone) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        "phone": cleanPhone,
        "cart": userCart,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
  }) 
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    sentOrder();
  }, []);

  useEffect(() => {
    let sum = 0;
    globalCart.map(item => {
      sum += item.cartPrice;
    })
    setResSum(sum);
  }, [globalCart]);
  

  function validPhone() {
    let cleanPhone = userPhone.replace(/\D+/g, '');
    if (cleanPhone.length != 11) {
      setValid(false);
      return false;
    }
    else {
      setValid(true);
      return true;
    }
  }

  function validCart() {
    if (resSum) return true;
    else {
      document.getElementById('no_items').style.color = '#E65659';
      return false;
    }
  }
  
  function validation() {
    if (validPhone() * validCart()) return true
    else return false
  }
  
  function showOrder() {
    if (validation()) {
      dispatch(createOrder({
        active: true,
        resultSum: resSum,
        resultPhone: userPhone,
      }));

      let userCart = globalCart.map(x=> {
        return {
          "id": x.id,
          "quantity": x.cartAmount,
        }
      });

      let cleanPhone = userPhone.replace(/\D+/g, '');
  
      sentOrder(userCart, cleanPhone);
      setUserPhone('  ');
    }
  }



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
              <InputMask
                className={styles.ph_input} 
                id='inp'
                mask="+7(999)999-99-99"
                maskChar=" "
                value={userPhone}
                onChange={e => setUserPhone(e.target.value)}
              />
            <button className={styles.order} onClick={() => showOrder()}>Заказать</button>
          </div>

          {valid ? null : <p className={styles.invalid_phone}>Неверный телефон</p>}
        </div>
    </div>
  )
}
