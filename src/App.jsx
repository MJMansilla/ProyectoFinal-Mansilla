import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router"
import NavBar  from "./components/NavBar"
import ItemListContainer  from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartContainer from "./components/CartContainer"
import Checkout from "./components/Checkout"
import { ToastContainer, toast } from "react-toastify"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000} theme="colored" />
    </BrowserRouter>
  );
}

export default App;
