import React from 'react'
import './Hero2.css'

import image from '../assets/Herobg.jpg'
import ReviewCarousel from './ReviewCarousel'
import { useNavigate } from 'react-router-dom'


 export const Hero2 = ({setPage}) => {
  const nav = useNavigate();
  return (
    <div>
    <div className='hero2'>
        
          <p className='hero2_p'>As Seen In</p>
          <img src="https://bitetoothpastebits.com/cdn/shop/files/forbes-logo-113023.png?v=1701383679&width=550" alt=""width={100}  height={25}  />
          <img src="https://bitetoothpastebits.com/cdn/shop/files/oprah-magazine-logo-113023.png?v=1701383679&width=550" alt="" width={100} height={25}  />
          <img src="https://bitetoothpastebits.com/cdn/shop/files/cosmopolitan-logo-113023.png?v=1701383679&width=550" alt="" width={100}  height={25}   />
          <img src="https://bitetoothpastebits.com/cdn/shop/files/womens-health-logo-113023.png?v=1701383679&width=550" alt=""  width={100}  height={25} />
          <img src="https://bitetoothpastebits.com/cdn/shop/files/vogue-logo-113023.png?v=1701383679&width=550" alt="" width={100}  height={25} />
          <img src="https://bitetoothpastebits.com/cdn/shop/files/goop-113023.png?v=1701383679&width=550" alt="" width={100}  height={25}  />
          <img src="https://bitetoothpastebits.com/cdn/shop/files/elle-logo-113023.png?v=1701383679&width=550" alt="" width={100}  height={25}  />
          <img src="https://bitetoothpastebits.com/cdn/shop/files/people-logo-113023.png?v=1701383679&width=550" alt="" width={100}  height={25}  />
         
    </div>
    <hr />
     <div className='hero3'>
        <h1 className='hero3_h1'>How To Use</h1>
        <div className='hero3_img'>
            <div className='hero3_img_p'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_howto_step1_desktop_2.jpg?v=1719862118&width=939"width={400}  height={400}  />
                 <h3>Grab a Toothpaste Bit</h3>
                 <p>A single bit is all you need</p>
            </div>
            <div className='hero3_img_p'>
            <img src="https://bitetoothpastebits.com/cdn/shop/files/2024.07.01_homepage_howto_step2_desktop_1_-optimized.jpg?v=1719614397&width=936" width={400}  height={400} />
                 <h3>Grab a Toothpaste Bit</h3>
                 <p>A single bit is all you need</p>
            </div>
            <div className='hero3_img_p'>
            <img src="https://bitetoothpastebits.com/cdn/shop/files/2024.07.01_homepage_howto_step3_desktop_1_-optimized.jpg?v=1719614439&width=936" width={400}  height={400} />
                 <h3>Grab a Toothpaste Bit</h3>
                 <p>A single bit is all you need</p>
            </div>
        </div>
         <button>SHOP NOW</button>
  
     </div>
        <div className='hero4'>
            <h1 className='hero4_h1'>21,000+ Reviews For A Reason</h1>
             <div className='hero4_img'>
                  <ReviewCarousel/>
                 
             </div>
             <button className='hero4_btn'>Read All Reviews</button>
            
        </div>
           
            <article className='hero7_wrapper'>
      <div className='hero7'>
      
        <h1 className='hero3_h1'>Shop By Category</h1>
        <div className='hero3_img'>
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/shop_by_category_toothpaste_bits_2-optimized.jpg?v=1719615447&width=750"width={300}  height={300}  />
                <button>SHOP NOW</button>
                </div>
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/shop_by_category_oral_care_2-optimized.jpg?v=1719615477&width=750"width={300}  height={300}  />
                <button onClick={()=>nav('/shop-now')}>SHOP NOW</button>
                </div>
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_shop_by_category_sets_1.jpg?v=1719615590&width=750https://bitetoothpastebits.com/cdn/shop/files/pdp-product-card-desktop-silver-case-open-no-bg.png?v=1705442119&width=550" width={300}  height={300} />
                  <button onClick={()=>nav('/shop-now')}>SHOP NOW</button>
                   </div>
                <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/shop_by_category_body_care_2-optimized.jpg?v=1719615613&width=750" width={300}  height={300} />
                <button onClick={()=>nav('/shop-now')}>SHOP NOW</button>
                </div>
               
      </div>
        </div>
        </article>

        <div className='hero6'>
           <h1 className='hero6_h1'>Why Bits Are Better</h1>
         <img src={image} alt="" className='hero6_img'/>
        </div>

         <article className='hero7_wrapper'>
          <div className='hero7'>
      
        <h1 className='hero3_h1'>Shop Best Sellers</h1>
        <div className='hero3_img'>
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pc-tpb-ff-4oz-mint-no-bg.webp?v=1702985943&width=550"width={300}  height={300}  />
                <button>ADD TO BAG</button>
                </div>
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pc-tpb-wf-2oz-mint-fluoride-no-bg.png?v=1701367239&width=550"width={300}  height={300}  />
                <button>ADD TO BAG</button>
                </div>
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pdp-product-card-desktop-silver-case-open-no-bg.png?v=1705442119&width=550" width={300}  height={300} />
                  <button>ADD TO BAG</button>
                   </div>
                <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pc-mouthwash-no-bg.png?v=1701372644&width=550" width={300}  height={300} />
                <button>ADD TO BAG</button>
                </div>
               
      </div>
        </div>
        </article>
       
       </div>
     

  )
}
export default Hero2