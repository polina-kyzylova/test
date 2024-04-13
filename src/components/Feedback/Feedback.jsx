import React from 'react';
import styles from './Feedback.module.css';


export default function Feedback({fbNumber, fbSource, fbText}) {
  return (
    <div className={styles.feedback}>
        <p>Отзыв {fbNumber}</p>
        <p>{fbSource}</p>
        <p>{fbText}</p>
    </div>
  )
}
