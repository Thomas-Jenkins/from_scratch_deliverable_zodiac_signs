import React from 'react';
import './Main.css';
import background from '../../assets/astrology_background.jpg';
import Sign from '../Sign/Sign';
import { signs } from '../../data.js';


export default function Main() {
  return (<main className="temp" style={{ backgroundImage: `url(${background})` }}>
    {signs.map((sign) => (
      <Sign key={sign.name} {...sign} />
    ))}
  </main>
  );
}