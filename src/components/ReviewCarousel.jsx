

  import './ReviewCarousel.css'
  import { useEffect, useState } from 'react';
  const Reviews = [
    {
      image: "https://bitetoothpastebits.com/cdn/shop/files/pdp-why-you-want-this-product-3up-2.jpg?v=1700114660&width=1489",
      text: "I love how eco-friendly this product is. Highly recommend!",
      name: "Emma.L.",
      star: 4
    },
    {
      image: "https://bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&width=1512",
      text: "Tastes great and works perfectly. Switching for good!",
      name: "Kathleen M.",
      star:5
    },
    {
      image: "https://bitetoothpastebits.com/cdn/shop/files/homepage-ugc-review-1.jpg?v=1700115404&width=1100",
      text: "These toothpaste bits are amazing! My teeth feel so clean.",
      name: "Chrissy B.",
      star:3
    },
   
  ]
  const ReviewCarousel =() => {

    const [carousel, setCaroucel] = useState(0)
    const currentReview = Reviews[carousel]

    useEffect(()=>{
      const interval = setInterval(() => {
        setCaroucel((prev)=>(prev + 1)% Reviews.length)
      
      }, 5000);
      return ()=> clearInterval(interval)
    }, [])
    
  return (
    <div className="review-carousel">
      <div className="review-slide">
        <div className='image_holder'>
        <img
          src={currentReview.image}
          alt="Reviewer"
          className="review-image"
        />
        </div>
        <div className='reviewers_details'>
        <p className="review-text">
          {currentReview.text}
        </p>
        <div className="review-stars">
           {"★".repeat(currentReview.star)}
            {"☆".repeat(5 - currentReview.star)}
        </div>
        <p className="reviewer-name">{currentReview.name}</p>
        </div>
      </div>
      
 
    </div>
  );
}
export default ReviewCarousel