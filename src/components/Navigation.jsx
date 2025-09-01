import axios from "axios"
import './Navigation.css'
import Footer from './Footer'
import Header from './header'
import { useState, useEffect } from "react"


export const Navigation = ({category}) => {
    const categories = ["ALL", "BEST SELLERS", "ORAL CARE", "BODY CARE", "SETS", "SUBSCRIBE AND SAVE"];
    const [products, setProducts] = useState([])

    const run= async()=>{
      try{
        const res = await axios.get("https://api.escuelajs.co/api/v1/products")
        setProducts(res.data)
        console.log(res.data)

      }catch(err){
        console.log(err)
      }
    }

    useEffect(() => {
      run()
    }, []);


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
      
     
        <div className='prod_img' >
                 
                {
                  products.map((item)=>(
                    <div key={item.id} className='prod_card'>
                      <h3 className="prod_title">{(item.title).toUpperCase()}</h3>
                    <img src={item.images[0]} width={300}  height={300}  />
                    <button className="prod_button">ADD TO BAG | ${item.price}</button>
                    </div>
                  ))
                }
        </div>
        </div>
        </article>


          {/* <article className='hero7_wrapper' style={{height:"330px",backgroundColor:" #F8F8F8"}}>

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
                </article> */}
                {/* <Footer/> */}
    </div>
  )
}
export default Navigation