import React from 'react';

function ProductCard({item}) {
return (
    <div className="card">
    <h1>Product</h1>
    <h2>{item.title}</h2>
    <img src={item.image} alt={item.title} />
    <p>{item.description}</p>
    </div>
    
)}

export default ProductCard;