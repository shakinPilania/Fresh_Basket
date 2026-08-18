import React, { useContext } from 'react'
import { useState  } from 'react'
import { products , CATEGORIES } from '../data'
import Card from '../Component/Card'
import Footer from '../Component/Footer'
import WishlistEmpty from '../Component/WishlistEmpty'
import { Search , ChevronDown } from 'lucide-react'
import { WishlistContext } from '../Context/WishlistContext'

function Shop() {
  
  const { wishlist, selectedCategory,setSelectedCategory } = useContext(WishlistContext);
  const [searchData, setSearchData]=useState("");
  // const [flag , setFlag] = useState(false);
  function searchChange(event)
  {
    setSearchData(event.target.value);
    // filteredProducts=products.filter(product => product.name === searchData);
  }
  // const matchSearch=products.filter((product)=>product.name==searchData);
  // const filteredProducts = selectedCategory === "All" 
  //   ? products 
  //   : selectedCategory === "❤️ Wishlist" 
  //     ? wishlist 
  //     : products.filter(product => product.category === selectedCategory);

  const matchSearch = products.filter(product =>
  product.name.toLowerCase().includes(searchData.toLowerCase())
);

const searchFlag = matchSearch.length > 0;

const filteredProducts =
  searchData !== "" && searchFlag
    ? matchSearch
    : selectedCategory === "All"
      ? products
      : selectedCategory === "❤️ Wishlist"
        ? wishlist
        : products.filter(product => product.category === selectedCategory);
  
  
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        {/* regarding top heading  */}
        <section className='mb-8'>
          <p className='text-green-600 text-xs font-bold uppercase tracking-widest mb-1'>Everything fresh</p>
          <h1 className='text-3xl playfair font-bold text-[#1C1A16]  '>Our Vegetable Shop</h1>
          <p className='mt-2 text-[#78716C] plusJakarta'>Handpicked from local farms, delivered fresh daily.</p>
        </section>
        {/* regarding filter  */}
        <section className=' flex flex-col  gap-5 mb-6'>
          <div className='flex items-center gap-2 ' >
            <div className='relative flex-1 2'>
              <Search size={18} className='absolute left-3 top-1/2 -translate-y-1/2 text-[#78716C]' />
              <input type='text' onChange={searchChange} value={searchData} placeholder='Search Veggies' className='w-full pl-9 pr-4 py-2.5 bg-white border border-[#1c1a161a] rounded-2xl text-sm focus:outline-none focus:ring-2  focus:ring-green-500 focus:border-green-400 transition-all' />
            </div>
            <div className='relative'>
              <select className='appearance-none pl-4 pr-9 py-2.5 bg-white border border-[#1c1a161a] rounded-xl text-sm font-medium focus:outline-none focus:ring-2  focus:ring-green-500 cursor-pointer   '>
                <option>Sort: Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
              <ChevronDown  size={14} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#78716C] pointer-events-none'/>
            </div>
          </div>
          <div className='flex gap-2 pb-2 mb-8 overflow-x-auto scrollbar-hide'>
              {
                CATEGORIES.map((category)=>
                  <button onClick={() => setSelectedCategory(category)} key={category} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory===category?"bg-green-600 text-white shadow-md   ":"bg-white border border-[#1c1a161a] text-stone-600 hover:border-green-300"}  `} >{category}</button>
                )
              }
          </div>
        </section>
        {/* regarding all listed vegetable  */}
        {
          (selectedCategory === "❤️ Wishlist" && filteredProducts.length === 0)?
          (<p></p>):(<p className='text-sm mb-5 text-[#78716C] '>here result be come </p>)
        }
          
        
        
          {
              selectedCategory === "❤️ Wishlist" && filteredProducts.length === 0 ? (
                <div className="flex justify-center items-center min-h-[300px]">
                  <WishlistEmpty setSelectedCategory={setSelectedCategory} />
                </div>
              ) : (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {
                    filteredProducts.map((product) => (
                      <Card key={product.id} featured={product} doThis={true} />
                    ))
                  }
                </section>
              )
          }
       
      </div>
      <Footer/>
    </div>
  )
}

export default Shop