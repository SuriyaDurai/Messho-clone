import React from 'react'
import { Link } from 'react-router-dom'

function Hoverline () {
    return (
      
      <div>
        <hr/>
          <ul className='Hoverlist'>
            <li>Women Ethnic</li>
            {/* {/* <div className='Hover1'>
            <ul>All Women Ethnic</ul>
            <li>Veiw all</li>
            <ul>Sarees</ul>
            <li>All Sarees</li>
            <li>Silk Sarees</li>
            <li>Cotton Silk Sarees</li>
            <li>Cotton Sarees</li>
            <li>Georgette Sarees</li>
            <li>Chiffon Sarees</li>
            <li>Satin Sarees</li>
            <li>Embroidered Sarees</li> */}
           {/*Sarres end */}
            {/* <ul>Kurtis</ul> */}
            {/* <li>All Kurtis</li>
            <li>Anarkali Kurtis</li>
            <li>Rayon Kurtis</li>
            <li>Cotton Kurtis</li>
            <li>Embroidered Kurtis</li> */}
            {/*Kurties end*/}

            {/* <ul>Kurta Sets</ul> */}
            {/* <li>All Kurta Sets</li> */}
             {/*Kurta sets end*/}

            {/* <ul>Suits & Dress Material</ul> */}
            {/* <li>All Suits & Dress Material</li>
            <li>Cotton Suits</li>
            <li>Embroidered Suits</li>
            <li>Chanderi Suits</li> */}
             {/*Suits & Dress Material end*/}

            {/* <ul>Other Ethnic</ul> */}
            {/* <li>Blouses</li>
            <li>Dupattas</li>
            <li>Lehanga</li>
            <li>Gown</li> */}
            {/* <li>Ethnic Bottomwear</li> */}
            {/*Other Ethnic end
             */}

            <li>Women western</li>
            <li><Link to="/mens">Men</Link></li>
            <li><Link to="/kids">Kids</Link></li>

            <li>Home & Kitchen</li>
            <li>Beauty & Health</li>
            <li>Jewellery & Accessories</li>

            <li>Bags & Footwear</li>
            <li>Electronics</li>
            
          </ul>
          <hr/>
          
          </div>
         
    )
  }
  export default Hoverline

  







