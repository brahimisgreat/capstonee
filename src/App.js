
import './App.css';
import Navbar from './components/NavBar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/products/products';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element= {<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
