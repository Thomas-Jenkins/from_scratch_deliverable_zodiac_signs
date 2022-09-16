import React from 'react';
import './sign.css';

export default function Sign({ name, dates }) {
  return <>
    <div className='sign-box'>
      <img alt={name} src={`${process.env.PUBLIC_URL}/signimg/${name}.png`} />
      <p>{name}</p>
      <p>{dates}</p>
    </div>  
  </>;
}