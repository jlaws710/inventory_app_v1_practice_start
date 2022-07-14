import { useState, useEffect } from 'react';
import './App.css';

import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch('http://localhost:5000/api/products');
    const data = await response.json();

    console.log('Data: ', data);
    const { products } = data;
    setProducts(products);
    console.log('Products: ', products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <h1>Inventory App</h1>
      <div className='container'>
      {products.length > 0 ? <ProductCard item={products[0]} /> : 'Please Wait'}
      {products.length > 0
        ? products.map((item) => <ProductCard item={item} />)
        : 'No products to display'}
    </div>
    </div>
  );
}

export default App;
