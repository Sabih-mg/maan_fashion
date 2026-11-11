"use client";
import { useMemo, useState } from "react";
import { products, Product } from "@/lib/products";

export default function Storefront() {
 const [cart,setCart] = useState<{product:Product;size:string}[]>([]);
 const [category,setCategory] = useState("All");
 const [search,setSearch] = useState("");
 const [selected,setSelected] = useState<Product|null>(null);
 const [size,setSize] = useState("M");
 const [cartOpen,setCartOpen] = useState(false);
 const visible = useMemo(()=>products.filter(p=>(category==="All"||p.category===category)&&p.name.toLowerCase().includes(search.toLowerCase())),[category,search]);
 const add = (p:Product,s:string)=>{setCart(c=>[...c,{product:p,size:s}]);setSelected(null);setCartOpen(true)};
 const total=cart.reduce((n,x)=>n+x.product.price,0);
 const money=(n:number)=>"Rs. "+n.toLocaleString("en-PK");
 return <main>
  <div className="announcement">COMPLIMENTARY DELIVERY ON ORDERS ABOVE RS. 8,000</div>
  <header className="header"><span className="mobile-menu">☰</span><a className="logo" href="#">MAAN FASHION</a><nav className="nav"><a href="#shop">SHOP</a><a href="#categories">CATEGORIES</a><a href="#story">OUR STORY</a></nav><div className="header-actions"><a href="#shop">SEARCH</a><button onClick={()=>setCartOpen(true)} style={{border:0,background:"transparent"}}>BAG <span className="cart-count">{cart.length}</span></button></div></header>
  <section className="hero"><div className="hero-copy"><div className="eyebrow">THE NEW SEASON / 2026</div><h1>Style that<br/>speaks softly.</h1><p>Thoughtfully selected essentials for a wardrobe that feels timeless, confident and completely your own.</p><a className="btn light" href="#shop">DISCOVER THE COLLECTION</a></div></section>
  <section className="section" id="categories"><div className="section-head"><div><div className="eyebrow">CURATED FOR EVERY YOU</div><h2>Shop by category</h2></div><span className="muted">Explore the edit →</span></div><div className="categories">
   <a className="category" href="#shop" onClick={()=>setCategory("Men")}><img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=85" alt="Men's fashion"/><span className="category-label">MEN — SHOP NOW</span></a>
   <a className="category" href="#shop" onClick={()=>setCategory("Women")}><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85" alt="Women's fashion"/><span className="category-label">WOMEN — SHOP NOW</span></a>
   <a className="category" href="#shop" onClick={()=>setCategory("Unisex")}><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85" alt="Unisex fashion"/><span className="category-label">UNISEX — SHOP NOW</span></a>
  </div></section>
  <section className="section" id="shop"><div className="section-head"><div><div className="eyebrow">THE MAAN EDIT</div><h2>Featured pieces</h2></div><span className="muted">Made for everyday</span></div>
   <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:24,alignItems:"center"}}>{["All","Men","Women","Unisex"].map(c=><button key={c} onClick={()=>setCategory(c)} style={{padding:"9px 15px",border:"1px solid #ddd",background:category===c?"#111":"white",color:category===c?"white":"#111",fontSize:11}}>{c.toUpperCase()}</button>)}<input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products..." style={{marginLeft:"auto",padding:10,border:"1px solid #ddd",maxWidth:220,width:"100%"}}/></div>
   <div className="products">{visible.map(p=><article className="product" key={p.id}><button onClick={()=>{setSelected(p);setSize("M")}} style={{border:0,padding:0,background:"transparent",width:"100%",textAlign:"left"}}><div className="product-image"><img src={p.image} alt={p.name}/></div><div className="product-info"><div className="tag">{p.badge||p.category}</div><div className="product-name">{p.name}</div><div className="price">{money(p.price)}</div></div></button></article>)}</div>
  </section>
  <section className="newsletter" id="story"><div className="eyebrow">A NOTE FROM MAAN</div><h2>Less, but considered.</h2><p>Everyday pieces. Thoughtful details. A style that lasts beyond seasons.</p><form className="newsletter-form" onSubmit={e=>{e.preventDefault();alert("Thank you for joining MAAN FASHION.")}}><input type="email" required placeholder="Your email address"/><button>JOIN US</button></form></section>
  <footer className="footer"><div><div className="logo">MAAN FASHION</div><small>Modern essentials. Timeless by nature.</small></div><div className="footer-links"><a href="#shop">Shop</a><a href="#categories">Categories</a><a href="mailto:hello@maanfashion.pk">Contact</a><a href="#story">About</a></div><small>© 2026 MAAN FASHION. Pakistan.</small></footer>
  {selected&&<div onClick={()=>setSelected(null)} style={overlay}><div onClick={e=>e.stopPropagation()} style={modal}><button onClick={()=>setSelected(null)} style={close}>×</button><img src={selected.image} alt={selected.name} style={{width:"100%",height:250,objectFit:"cover"}}/><div style={{padding:22}}><div className="tag">{selected.category}</div><h2 style={{fontFamily:"'Playfair Display',serif",fontWeight:500}}>{selected.name}</h2><b>{money(selected.price)}</b><p className="muted">Select your size</p><div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{selected.sizes.map(s=><button key={s} onClick={()=>setSize(s)} style={{padding:"10px 14px",border:"1px solid #ccc",background:size===s?"#111":"white",color:size===s?"white":"#111"}}>{s}</button>)}</div><button className="btn" style={{width:"100%"}} onClick={()=>add(selected,size)}>ADD TO BAG</button></div></div></div>}
  {cartOpen&&<div onClick={()=>setCartOpen(false)} style={overlay}><aside onClick={e=>e.stopPropagation()} style={drawer}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h2 style={{fontFamily:"'Playfair Display',serif"}}>Your bag ({cart.length})</h2><button onClick={()=>setCartOpen(false)} style={close}>×</button></div>{cart.length===0?<p className="muted">Your bag is currently empty.</p>:cart.map((item,i)=><div key={i} style={{display:"flex",gap:12,borderBottom:"1px solid #eee",padding:"14px 0"}}><img src={item.product.image} alt="" style={{width:75,height:90,objectFit:"cover"}}/><div style={{flex:1}}><b style={{fontSize:13}}>{item.product.name}</b><p className="muted">Size: {item.size}</p>{money(item.product.price)}</div><button onClick={()=>setCart(c=>c.filter((_,j)=>j!==i))} style={{border:0,background:"none"}}>Remove</button></div>)}<div style={{marginTop:25,display:"flex",justifyContent:"space-between"}}><b>Subtotal</b><b>{money(total)}</b></div><p className="muted">Delivery charges calculated at checkout.</p><a className="btn" style={{width:"100%"}} href="/checkout">PROCEED TO CHECKOUT</a></aside></div>}
 </main>;
}
const overlay:React.CSSProperties={position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:20,display:"flex",justifyContent:"center",alignItems:"center",padding:16};
const modal:React.CSSProperties={background:"white",width:"100%",maxWidth:430,maxHeight:"90vh",overflowY:"auto",position:"relative"};
const drawer:React.CSSProperties={background:"white",height:"100%",width:"100%",maxWidth:440,marginLeft:"auto",position:"absolute",right:0,top:0,padding:24,overflowY:"auto"};
const close:React.CSSProperties={border:0,background:"transparent",fontSize:28,cursor:"pointer"};
