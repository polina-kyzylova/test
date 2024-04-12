import React from 'react';
import IMask from 'imask';
import {useRef, useEffect} from 'react';


export default function PhoneInput() {
  const styles = {
    backgroundColor: '#222222',
    color: '#F0F0F0',
    border: 'none',
    outline: 'none',
    width: '18vw',
    height: '6vh',
    fontSize: '1.6vw',
    borderRadius: '15px',
    paddingLeft: '5px',
  }

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const el = document.getElementById(element.id);
    const maskOptions = { mask: '+{7}(000)000-00-00'};
    const mask = IMask(el, maskOptions);
    mask.value = '+7(___)___-__-__';
  }, []);


  return (
    <input ref={ref} id='inp' type="text" style={styles}></input>
  )
}
