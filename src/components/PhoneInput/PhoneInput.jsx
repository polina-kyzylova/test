import React from 'react';
import {useState} from 'react';
import styles from './PhoneInput.module.css';
import InputMask from 'react-input-mask'
import { useEffect } from 'react';



export default function PhoneInput({valid, setResultPhone}) {
  const [userPhone, setUserPhone] = useState('');

  useEffect(() => {
    setResultPhone(userPhone);
  }, [valid]);

  return (
      <InputMask
        className={styles.ph_input} 
        id='inp'
        mask="+7(999)999-99-99"
        maskChar=" "
        value={userPhone}
        onChange={e => setUserPhone(e.target.value)}
      />
  )
}




  /*
  useEffect(() => {
    if (userPhone.length != 16) {
      document.getElementById('inp').style.border = 'solid #E65659 1px';
      setValid(false);
    }
    else {
      document.getElementById('inp').style.border = 'none';
      setValid(true);
    }
  }, []);
  */
  