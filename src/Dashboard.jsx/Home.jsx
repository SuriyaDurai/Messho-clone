import React from 'react'
import Hoverline from './Hoverline'
import '../Dashboard.jsx/style.css'
import Banners from './Banners'
import Card from '../Cards/Card'


function Search () {
  return (

    <><div className='logo1'>
    <div style={{display:"flex"}}>
        <img  className ='logo'src="https://cdn.hevodata.com/customer/logo/8c76f62bd88177a78bb6e2810a244446.png" alt='logo'/> 
        <input className='searchbox' type='text' placeholder= 'Search your product'></input>
        </div>
        <ul className='right'>
          <li className='D'>Download app</li>
          <div className='line'></div>
          
          <li className='D'>Become supplier</li>
          <div className='line'></div>
          <li className='D'> Profile</li>
          <div className='line'></div>
          <li className='D'>Cart</li>
        </ul>
        </div>

        <Hoverline/>
        <Banners/>
        <Card/>
        
        
        
        </>
        
  )
}
export default Search