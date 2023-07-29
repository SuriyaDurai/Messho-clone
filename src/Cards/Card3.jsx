import React from 'react'
import IMG from '../Cards/Cardimg1.webp'

function Card3() {
  return (
    <div><div><div class="card">
    <img style={{width:"245px"}} class="card-img" src={IMG} alt=" "/>
    <div class="card-body">
      <h5 class="Product">Classy Fashionable men shirt</h5>
      <div style={{display:"flex", marginBottom:"-5px" }}><p><b>₹500</b></p><p style={{color:"lightgrey"}}>onwards</p></div>
      <div className='Delivery'><p>Free delivery</p></div>
      <div className='Review'>3.5<span><svg xmlns="http://www.w3.org/2000/svg" width="14"  height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg></span></div><br/>
  
      <a href=" " class="btn btn-primary">View Product</a>
    </div>
  </div></div></div>
  )
}

export default Card3