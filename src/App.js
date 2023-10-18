import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import { useState } from 'react';

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product, num=1) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + num } : item)))
    } else{
      setCartItem([...cartItem, { ...product, qty: num }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Shop/>} />
    </Routes>
    </Router>
  );
}

export default App;
