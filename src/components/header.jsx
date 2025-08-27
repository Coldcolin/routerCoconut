import React from 'react'
import './header.css'

import { RiUserLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";

import { useState,useEffect } from 'react';
export const Header = ({variant = "" }) => {
  const [isScroll, setIsSCroll] = useState(false)
  
  useEffect(()=>{
     const HandleScroll = ()=>{
      setIsSCroll(window.scrollY>5+0)
     }
     window.addEventListener("scroll", HandleScroll)
     return ()=> window.removeEventListener("scroll",HandleScroll)
  }, [])
   
  return (
    <div className={`header ${isScroll ? "Change" :""} ${variant}`}>
      
      <div className='icon1'>
          <div className='bite'>
            <span>BECAUSE IT'S THE EARTH</span>
          </div>
      
      </div>
    
    
     
     <div className='icon2'>
      <div>SHOP</div>
      <div>ABOUT</div>
      <div>OUR IMPACT</div>
     </div>
        
          <div className='icon3'>
       <RiUserLine style={{ fontSize:"30", padding:"13",cursor:"pointer"}}  />
       <MdOutlineShoppingBag style={{ fontSize:"30", padding:"13" ,cursor:"pointer"}}   />
      
           <hr />
          </div>
    
       
    </div>
  )
}
export default Header