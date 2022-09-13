import React from 'react';

export default function Sign({ name, dates }) {
  return <>
    <div>
      <img alt={name} src={`${process.env.PUBLIC_URL}/signimg/${name}.png`} />
      <p>{name}</p>
      <p>{dates}</p>
    </div>  
  </>;
}