import React from 'react';
import IMask from 'imask';
import {useRef, useEffect, useState} from 'react';
import styles from './PhoneInput.module.css';

import InputMask from 'react-input-mask'




export default function PhoneInput({setPhone, valid}) {
  //const ref = useRef(null);

  const [userPhone, setUserPhone] = useState('');
  
  /*
  useEffect(() => {
    const element = ref.current;
    const el = document.getElementById(element.id);
    const maskOptions = { mask: '+{7}(000)000-00-00'};
    const mask = IMask(el, maskOptions);
    mask.value = '+7(___)___-__-__';

    if (!valid) el.style.border = 'solid #E65659 1px';
    else el.style.border = 'none';
  }, [valid]);
  */


  return (
      <InputMask
        className={styles.ph_input} 
        mask="+7(999)999-99-99"
        maskChar=" "
        value={userPhone}
        onChange={e => setUserPhone(e.target.value)}
      />
  )
}


/* <input ref={ref} id='inp' type="text" className={styles.ph_input} onChange={setPhone}></input> */