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
    function increment(product)
    {
            setBasketData((prev)=>
            {
                let newData=[...prev];
                let item = newData.find(item => item.id===product.id)
                item.countQty.count+=1; 
                setTotalCount(prev=>prev+1)
                return newData;
            })
    }
    function decrement(product)
    {
        if(product.countQty.count==1)
        {
            // setTotalCount(prev=>prev-1)
            removeFrmBasket(product);
        }
        else 
        {
            setTotalCount(prev=>prev-1)
            setBasketData((prev)=>
            {
                let newData=[...prev];
                let item = newData.find(item => item.id===product.id)
                item.countQty.count-=1; 
                return newData;
            })
        }
        
    }
    function addToBasket(product)
    {
        
        //if it not present than 
        if(!isPresent(product.id))
        {
            setTotalCount((prev)=>prev+1);
            setBasketData((prev)=>[...prev , product]);
        }
        else 
        {
            increment(product);
        }
    }
    function removeFrmBasket(product)
    {
        setTotalCount(prev=> prev-product.countQty.count)
        setBasketData((prev)=>prev.filter((itm)=>itm.id!=product.id));
    }

    const value =
    {
        basketData , 
        addToBasket ,
        isPresent ,
        removeFrmBasket ,
        totalCount,
        increment , 
        decrement,
    }

    //s-3 provide the context or return it 
    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}