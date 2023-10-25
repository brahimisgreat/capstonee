import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Cart from "./components/cart/cart";
import Shop from "./components/shop/shop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart"  element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
