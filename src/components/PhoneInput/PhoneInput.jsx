import React from 'react';
import IMask from 'imask';
import {useRef, useEffect} from 'react';
import styles from './PhoneInput.module.css';


export default function PhoneInput({setPhone, valid}) {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    const el = document.getElementById(element.id);
    const maskOptions = { mask: '+{7}(000)000-00-00'};
    const mask = IMask(el, maskOptions);
    mask.value = '+7(___)___-__-__';

    if (!valid) el.style.border = 'solid #E65659 1px';
    else el.style.border = 'none';
  }, [valid]);


  return (
    <input ref={ref} id='inp' type="text" className={styles.ph_input} onChange={setPhone}></input>
  )
}
