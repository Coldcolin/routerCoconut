import React from 'react'
import './Navigation.css'
import Footer from './Footer'
import Header from './header'
export const Navigation = ({category}) => {
    const categories = ["ALL", "BEST SELLERS", "ORAL CARE", "BODY CARE", "SETS", "SUBSCRIBE AND SAVE"];

  return (
    <div> 
        
         <Header variant = "navigation" />< hr />
         
               <div className='nav_title'>
                
                 <h1>Shop your plastic-free routine.</h1>
                 <div className='nav_btn'>
                   {categories.map((c) => (
                   <button
                   key={c}
                   style={{
                backgroundColor: category === c ? "aqua" : "transparent",
                color: category === c ? "green" : "black", 
              }}
            >
              {c}
            </button>
          ))}
                 </div>
                  
               </div>
              <hr />
          <article className='hero7_wrapper' style={{marginTop:"70px", backgroundColor:" #F8F8F8"}}>

          <div className='hero7'>
      
     
        <div className='hero3_img' >
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pc-tpb-ff-4oz-mint-no-bg.webp?v=1702985943&width=550"width={300}  height={300}  />
                <button>ADD TO BAG</button>
                </div>
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pc-tpb-wf-2oz-mint-fluoride-no-bg.png?v=1701367239&width=550"width={300}  height={300}  />
                <button>ADD TO BAG</button>
                </div>
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pc-tpb-wf-2oz-mint-fluoride-no-bg.png?v=1701367239&width=550"width={300}  height={300}  />
                <button>ADD TO BAG</button>
                </div>
                
                <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pc-whitening-gel-no-bg.png?v=1701372643&width=550" width={300}  height={300} />
                <button>ADD TO BAG</button>
                </div>
                </div>
                </div>
                </article>


          <article className='hero7_wrapper' style={{height:"330px",backgroundColor:" #F8F8F8"}}>

          <div className='hero7'>
      
        <div className='hero3_img' >
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pc-toothbrush-2pack-no-bg.png?v=1704418238&width=550"width={300}  height={300}  />
                <button>ADD TO BAG</button>
                </div>
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pc-tongue-scraper-no-bg.png?v=1705962302&width=550"width={300}  height={300}  />
                <button>ADD TO BAG</button>
                </div>
                 <div className='hero7_btn_image'>
                <img src="https://bitetoothpastebits.com/cdn/shop/files/pdp-product-card-desktop-silver-case-open-no-bg.png?v=1705442119&width=550" width={300}  height={300} />
                  <button>ADD TO BAG</button>
                   </div>
                    
                </div>
                </div>
                </article>
                <Footer/>
    </div>
  )
}
export default Navigation