import React from 'react';
import background from '../../assets/astrology_background.jpg';
import Sign from '../Sign/Sign';
import { signs } from '../../data.js';
// moved back after deploy failure
import './main.css';

export default function Main() {
  return (<main className="temporary" style={{ backgroundImage: `url(${background})` }}>
    {signs.map((sign) => (
      <Sign key={sign.name} {...sign} />
    ))}
  </main> 
  );
}