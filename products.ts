export type Product = { id: number; name: string; category: string; price: number; image: string; badge?: string; sizes: string[] };
export const products: Product[] = [
 {id:1,name:"Essential Knit Sweater",category:"Men",price:5490,image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85",badge:"BESTSELLER",sizes:["S","M","L","XL"]},
 {id:2,name:"Relaxed Everyday Shirt",category:"Men",price:3890,image:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",sizes:["S","M","L","XL"]},
 {id:3,name:"Minimal Tailored Outfit",category:"Women",price:6290,image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",badge:"NEW",sizes:["XS","S","M","L"]},
 {id:4,name:"Classic Neutral Jacket",category:"Unisex",price:7990,image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",sizes:["S","M","L","XL"]},
 {id:5,name:"Everyday Streetwear",category:"Men",price:4590,image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",sizes:["S","M","L","XL"]},
 {id:6,name:"Modern Casual Look",category:"Women",price:5190,image:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",sizes:["XS","S","M","L"]},
 {id:7,name:"Premium Overshirt",category:"Unisex",price:5890,image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",sizes:["S","M","L","XL"]},
 {id:8,name:"Weekend Essential",category:"Men",price:3490,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",sizes:["S","M","L","XL"]}
];
