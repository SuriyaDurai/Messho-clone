import React from 'react'
import Bags from './Bags'

function Kids(props) {
  return (
    <div>
                <h1>Kids{props.summer}</h1>
                <Bags bags="laptop-bag"/>
                
        </div>
  )
}

export default Kids