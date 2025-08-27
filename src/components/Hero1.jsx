import React from 'react'
 import Header from './header'
 import { useNavigate } from 'react-router-dom'
 import './Hero.css'
 
export const Hero1 = () => {
  const nav = useNavigate();
  return (
    <div className='hero1'> 
          <Header /> 
          <hr />
          <div className='hero_left'>
          <h1 className='hero1_h1'>It's time to <br />brush better.</h1>
            
            <p className='hero1_p'>Clean up your routine with <br /> Toothpaste Bits. No plastic tubes,<br /> no harsh chemicals – just a better <br /> way to brush your teeth.

            </p>  
                 <button onClick={()=>nav('/login')}>SHOP NOW</button>
           </div>
    </div>
  )
}
export default Hero1