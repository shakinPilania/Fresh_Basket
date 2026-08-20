import { Children, createContext, useState } from "react";

//s-1 declare the context 
export const CartContext = createContext();

//s-2 initalize 
export default function  CartProvider({children})
{
    const [totalCount , setTotalCount] = useState(0);
    const [basketData , setBasketData] = useState([]);

    function isPresent(id)
    {
        return basketData.some((product)=>product.id==id);
    }

    function addToBasket(product)
    {
        setTotalCount((prev)=>prev+1);
        //if it not present than 
        if(!isPresent(product.id))
        {
            setBasketData((prev)=>[...prev , product]);
        }
        else 
        {
            // product.countQty.count+=1;

            setBasketData((prev)=>
            {
                let newData=[...prev];
                let item = newData.find(item => item.id===product.id)
                item.countQty.count+=1; 
                return newData;
            })
        }
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
        totalCount,
    }

    //s-3 provide the context or return it 
    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}