import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, React, useEffect, lazy, Suspense, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Loader from './components/Loader/Loader';
const Home =lazy(() => import("./pages/Home"))
const Shop =lazy(() => import("./pages/Shop"))
export const DataContainer = createContext();

const App = () => {
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
    // if product quantity == 1 then we have to remove it
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } 
    // else we just decrease the quantity
    else{
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  const deleteProduct = (product) => {
    setCartItem(cartItem.filter((item) => item.id !== product.id))
  }

  useEffect(() => {
    localStorage.setItem("cartItem",JSON.stringify(cartItem));
  }, [cartItem])

  return (
    <DataContainer.Provider value={{cartItem, setCartItem, addToCart, decreaseQty, deleteProduct, selectedProduct, setSelectedProduct}}>
      <Suspense fallback={<Loader />}>
        <Router>
          <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} 
            closeOnClick pauseOnFocusLoss draggable pauseOnHover 
            theme="light" />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </DataContainer.Provider>
  );
}

export default App;
