import React from 'react'
import './Footer.css'
import { BsArrowUpSquare } from "react-icons/bs";
import image from '../assets/footerphoto.jpg'
export const Footer = () => {
  return (
    <div>
            <footer className='footer_container'>
                <article className='footer_container_wrapper'>

                     <div className='footer_container_left'>
                          <div className='footer_container_left_contents'>
                              <p>Stay in the Know</p>
                              <p style={{fontSize:"22px"}}>Sign up for 10% off your first order.</p>
                               <input type="text" placeholder='Enter email address'/>
                              
                               <button>Subcribe</button>
                          </div>
                          <div>
                              <img src={image} alt="footerimage" />
                          </div>
                     </div>
                      <hr style={{margin:"0 20px 0 20px"}} />
                   <div className='footer_container_right'>
                    
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <ul  className='list_holder'>
                            <li  className='hd_footer'>Shop</li>
                            <li>All Product</li>
                            <li>Oral Care</li>
                            <li>Body</li>
                            <li>Sets</li>
                            
                        </ul>
                     
                      
                        <ul  className='list_holder'>
                            <li className='hd_footer'>Learn</li>
                            <li>Ingredients</li>
                            <li>Sustainability</li>
                            <li>About Us</li>
                            <li>Store Locator</li>
                           
                        </ul>
                     
                     
                        <ul  className='list_holder'>
                            <li className='hd_footer'>Help</li>
                            <li>Account↗</li>
                            <li>Wholesale↗</li>
                            <li>Affiliate Program↗</li>
                            <li>FAQS</li>
                            <li>Sitemap</li>
                            <li>Contact Us</li>
                        </ul>
                      
                     
                        <ul  className='list_holder'>
                            <li className='hd_footer'>Follow</li>
                            <li>Instagram↗</li>
                            <li>Tweeter↗</li>
                            <li>TicTok↗</li>
                            <li>Facebook↗</li>
                        </ul>
                        <ul  className='list_holder'>
                            
                            <BsArrowUpSquare style={{fontSize:"50"}}/>
                           
                        </ul>
                        </div>
                     
                               <div className='all_right_reserve'>
                                <div>© 2025 Bite. All Rights Reserved.</div>
                                 <ul className='terms_condition'>
                                  <li>Privacy policy</li>
                                  <li>Terms of service</li>
                                  <li>Shipping policy</li>
                                  <li>hello@bitetoothpastebits.com</li>
                                 </ul>
                               </div>
                   </div>
                  
                </article>
                
            </footer>

        </div>
  )
}
export default Footer