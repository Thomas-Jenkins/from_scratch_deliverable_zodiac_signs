import React from 'react';

export default function Sign({ name, dates }) {
  return <>
    <div>
      <img alt={name} src={`${process.env.PUBLIC_URL}/assets/${name}.png`} />
      <span>{name}</span>
      <span>{dates}</span>
    </div>  
  </>;
}