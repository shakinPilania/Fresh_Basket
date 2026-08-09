export const products= [
  { id: 1, name: "Organic Tomatoes", emoji: "🍅", price: 2.49, unit: "kg", category: "Fruit Vegs", rating: 4.8, reviews: 124, description: "Sun-ripened, vine-fresh tomatoes bursting with flavour. Perfect for salads, sauces, and soups.", badge: "Bestseller", bg: "from-red-100 to-orange-50" },
  { id: 2, name: "Baby Spinach", emoji: "🥬", price: 1.99, unit: "bunch", category: "Leafy Greens", rating: 4.7, reviews: 98, description: "Tender baby spinach leaves, rich in iron and vitamins. Great for smoothies and salads.", badge: "Organic", bg: "from-green-100 to-emerald-50" },
  { id: 3, name: "Carrots", emoji: "🥕", price: 1.29, unit: "kg", category: "Root Vegs", rating: 4.6, reviews: 87, description: "Crisp, sweet carrots straight from the farm. High in beta-carotene and antioxidants.", bg: "from-orange-100 to-amber-50" },
  { id: 4, name: "Broccoli", emoji: "🥦", price: 1.89, unit: "head", category: "Brassicas", rating: 4.5, reviews: 76, description: "Dense, nutrient-packed broccoli crowns. A superfood for everyday cooking.", badge: "Fresh Today", bg: "from-green-100 to-lime-50" },
  { id: 5, name: "Bell Peppers", emoji: "🫑", price: 3.49, unit: "kg", category: "Fruit Vegs", rating: 4.9, reviews: 211, description: "Vibrant mixed bell peppers — red, yellow and green — sweet and crunchy.", badge: "Popular", bg: "from-yellow-100 to-green-50" },
  { id: 6, name: "Cucumber", emoji: "🥒", price: 0.89, unit: "each", category: "Fruit Vegs", rating: 4.4, reviews: 64, description: "Cool, crisp English cucumbers. Hydrating and perfect for salads and snacking.", bg: "from-green-100 to-teal-50" },
  { id: 7, name: "Cauliflower", emoji: "🥦", price: 2.29, unit: "head", category: "Brassicas", rating: 4.3, reviews: 52, description: "Dense white cauliflower heads, versatile for roasting, ricing or steaming.", bg: "from-stone-100 to-gray-50" },
  { id: 8, name: "Garlic", emoji: "🧄", price: 0.79, unit: "bulb", category: "Aromatics", rating: 4.7, reviews: 189, description: "Pungent, flavourful garlic bulbs. The cornerstone of world-class cooking.", badge: "Organic", bg: "from-amber-50 to-yellow-50" },
  { id: 9, name: "Ginger Root", emoji: "🫚", price: 1.49, unit: "200g", category: "Aromatics", rating: 4.6, reviews: 143, description: "Fresh ginger root with a warm, spicy kick. Great for teas, curries, and marinades.", bg: "from-yellow-100 to-orange-50" },
  { id: 10, name: "Sweet Potato", emoji: "🍠", price: 1.79, unit: "kg", category: "Root Vegs", rating: 4.8, reviews: 167, description: "Naturally sweet, fibre-rich sweet potatoes. Delicious roasted, mashed or baked.", badge: "Bestseller", bg: "from-orange-100 to-amber-50" },
  { id: 11, name: "Mushrooms", emoji: "🍄", price: 2.99, unit: "250g", category: "Fungi", rating: 4.5, reviews: 92, description: "Earthy button mushrooms, hand-picked for peak freshness. Sauté, grill or stuff.", bg: "from-stone-100 to-amber-50" },
  { id: 12, name: "Onions", emoji: "🧅", price: 0.99, unit: "kg", category: "Aromatics", rating: 4.4, reviews: 78, description: "Brown onions that form the base of countless dishes. Pungent raw, sweet when cooked.", bg: "from-amber-100 to-yellow-50" },
  { id: 13, name: "Green Peas", emoji: "🫛", price: 2.19, unit: "500g", category: "Legumes", rating: 4.6, reviews: 61, description: "Plump, sweet garden peas — perfect for curries, pasta and side dishes.", badge: "Fresh Today", bg: "from-green-100 to-emerald-50" },
  { id: 14, name: "Eggplant", emoji: "🍆", price: 1.99, unit: "each", category: "Fruit Vegs", rating: 4.3, reviews: 44, description: "Deep purple eggplant with silky flesh. Ideal for baking, grilling and curries.", bg: "from-purple-100 to-violet-50" },
  { id: 15, name: "Corn on the Cob", emoji: "🌽", price: 1.49, unit: "each", category: "Grains", rating: 4.7, reviews: 115, description: "Golden sweet corn at peak ripeness. Grill, boil or roast for summer perfection.", bg: "from-yellow-100 to-amber-50" },
  { id: 16, name: "Zucchini", emoji: "🥒", price: 1.69, unit: "each", category: "Fruit Vegs", rating: 4.4, reviews: 58, description: "Tender zucchini with mild flavour. Perfect for spiralising, grilling or baking.", bg: "from-green-100 to-lime-50" },
];

export const CATEGORIES = ["All", "Fruit Vegs", "Leafy Greens", "Root Vegs", "Brassicas", "Aromatics", "Legumes", "Fungi", "Grains"];

//* for the home category 
export const catIcons = [
  { id: 1, category: "Fruit Vegs", emoji: "🍅" },
  { id: 2, category: "Leafy Greens", emoji: "🥬" },
  { id: 3, category: "Root Vegs", emoji: "🥕" },
  { id: 4, category: "Brassicas", emoji: "🥦" },
  { id: 5, category: "Aromatics", emoji: "🧄" },
  { id: 6, category: "Legumes", emoji: "🫛" },
  { id: 7, category: "Fungi", emoji: "🍄" },
  { id: 8, category: "Grains", emoji: "🌽" }
];
//* for the home card 
export const featured = [
  {
    id: 1,
    name: "Organic Tomatoes",
    emoji: "🍅",
    price: 2.49,
    unit: "kg",
    category: "Fruit Vegs",
    rating: 4.8,
    reviews: 124,
    description:
      "Sun-ripened, vine-fresh tomatoes bursting with flavour. Perfect for salads, sauces, and soups.",
    badge: "Bestseller",
    badgeColor: "bg-amber-100 text-amber-800",
    bg: "from-red-100 to-orange-50",
  },
  {
    id: 2,
    name: "Baby Spinach",
    emoji: "🥬",
    price: 1.99,
    unit: "bunch",
    category: "Leafy Greens",
    rating: 4.7,
    reviews: 98,
    description:
      "Tender baby spinach leaves, rich in iron and vitamins. Great for smoothies and salads.",
    badge: "Organic",
    badgeColor: "bg-green-100 text-green-800",
    bg: "from-green-100 to-emerald-50",
  },
  {
    id: 4,
    name: "Broccoli",
    emoji: "🥦",
    price: 1.89,
    unit: "head",
    category: "Brassicas",
    rating: 4.5,
    reviews: 76,
    description:
      "Dense, nutrient-packed broccoli crowns. A superfood for everyday cooking.",
    badge: "Fresh Today",
    badgeColor: "bg-emerald-100 text-emerald-800",
    bg: "from-green-100 to-lime-50",
  },
  {
    id: 5,
    name: "Bell Peppers",
    emoji: "🫑",
    price: 3.49,
    unit: "kg",
    category: "Fruit Vegs",
    rating: 4.9,
    reviews: 211,
    description:
      "Vibrant mixed bell peppers — red, yellow and green — sweet and crunchy.",
    badge: "Popular",
    badgeColor: "bg-blue-100 text-blue-800",
    bg: "from-yellow-100 to-green-50",
  },
];