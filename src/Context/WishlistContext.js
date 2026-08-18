import { createContext , useState } from "react";

//s-1 creaet an context 
export const WishlistContext=createContext();

//s-2 provider 
export default function  WishlistProvider({children})
{
    const [selectedCategory , setSelectedCategory]=useState("All");
    const [wishlist , setWishlist]= useState([]);
    //! function 
    function addToWishlist(product) 
    {
        setWishlist(prev => [...prev, product]);
    }
    function removeFromWishlist(id) 
    {
        setWishlist(prev =>prev.filter(item => item.id !== id));
    }
    function isExist(id2)
    {
        return wishlist.some((product)=>product.id==id2);
    }
    const value=
    {
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isExist,
        selectedCategory,
        setSelectedCategory,
    }

    //s-3 consume 
    return(
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}


