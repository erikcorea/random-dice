import React from 'react';
import '../styling/die.css';

export default function Die({face}) {
  return (
    <i className={`die fas fa-dice-${face}`} />
  )
}
