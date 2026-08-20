import React, { useContext } from 'react'

import {CartContext} from "../Context/CartContext"

//! import the component 
import Empty from '../BasketComponent/Empty'
import OrderSummary from '../BasketComponent/OrderSummary';

function Basket() {
  const {basketData} = useContext(CartContext);
  return (
    <div>
      {
        basketData.length==0?<Empty/>:(<OrderSummary/>)
      }
      
    </div>
  )
}

export default Basket