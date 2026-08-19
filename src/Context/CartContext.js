import { Children, createContext, useState } from "react";

//s-1 declare the context 
export const CartContext = createContext();

//s-2 initalize 
export default function  CartProvider({children})
{
    const [basketData , setBasketData] = useState([]);

    function isPresent(id)
    {
        return basketData.some((product)=>product.id==id);
    }

    function addToBasket(product)
    {
        //if it not present than 
        if(!isPresent(product.id))
            setBasketData((prev)=>[...prev , product]);
    }
    function removeFrmBasket(id)
    {
        setBasketData((prev)=>prev.filter((itm)=>itm.id!=id));
    }

    const value =
    {
        basketData , 
        addToBasket ,
        isPresent ,
        removeFrmBasket ,
    }

    //s-3 provide the context or return it 
    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}