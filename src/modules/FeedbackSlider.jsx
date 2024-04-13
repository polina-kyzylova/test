import Feedback from '../components/Feedback/Feedback';
import React from 'react';


export default function FeedbackSlider() {
  const style = {
    width: '55%',
    margin: '2% auto 5% auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  const url = 'http://o-complex.com:1337/reviews';

  return (
    <div style={style}>
      <Feedback 
      fbNumber='1'
      fbSource='1'
      fbText='1'/>
      
      <Feedback
      fbNumber='2'
      fbSource='2'
      fbText='2'/>
    </div>
  )
}
