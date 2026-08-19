import React, { useContext } from 'react'

import {CartContext} from "../Context/CartContext"

//! import the component 
import Empty from '../BasketComponent/Empty'

function Basket() {
  const {basketData} = useContext(CartContext);
  return (
    <div>
      {
        basketData.length==0?<Empty/>:(<p>WORKING</p>)
      }
      
    </div>
  )
}

export default Basket