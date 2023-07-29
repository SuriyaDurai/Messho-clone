import React from 'react'
import Search from './Search'
import Banners from '../Dashboard.jsx/Banners'

import '../Dashboard.jsx/style.css'
import Hoverline from '../Dashboard.jsx/Hoverline'

function Dashboard () {
  return (
    <div>
      
        <Search/>
        
        <Hoverline/>
        <Banners/>
        
    </div>
  )
}

export default Dashboard
