import { createContext , useState } from "react";

//s-1 creaet an context 
export const WishlistContext=createContext();

//s-2 provider 
export default function  WishlistProvider({children})
{
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
    const value=
    {
        wishlist,
        addToWishlist,
        removeFromWishlist
    }

    //s-3 consume 
    return(
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}


