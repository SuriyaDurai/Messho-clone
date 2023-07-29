import React from 'react'

function Banners() {
  return (
    <>
    <div className='Banner1'>
        <div className='Banner1D'>
        <h1>Lowest Prices</h1>
        <h1>Best quality shopping</h1>
        <div className='BannerB'>
          <div>
          <div className='B1flex'><img className='B1icon' src="https://images.meesho.com/images/pow/freeDelivery.svg" alt="" /> <span className='bfont'>Free  <p className='bf'><br/>Delivery</p></span></div> 
          
          
          <div className='B1flex'><img className='B1icon' src="https://images.meesho.com/images/pow/cod.svg" alt="" /> <span className='bfont'>Cash on <p className='bf'><br/>Delivery</p></span></div>
         
          
          <div className='B1flex'><img className='B1icon' src="https://images.meesho.com/images/pow/easyReturns.svg" alt="" /> <span className='bfont' >Easy <p className='bf'><br/>returns</p></span></div> 
          </div>
         
        </div>
        <div>
        <button className='Apklink'><img className='downloadimg' src="https://images.meesho.com/images/pow/playstoreSmallIcon.png" alt="" /><div className='downloadapk'>Download the meesho app</div></button>
        </div>  
        
        </div>
        
        
        
        <img className='Banner1i' src="https://images.meesho.com/images/marketing/1678691617864_512.webp" alt="Product" />
        
    </div>
   <div className='Hrline'></div><p className='Hrfont'>Top Categories to choose from</p><div className='Hrline2'></div>
    </>
  )
}

export default Banners