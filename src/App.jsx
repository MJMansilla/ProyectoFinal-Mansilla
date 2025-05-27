import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar />
    <ItemListContainer text="Bienvenido a SuperMercado M&M" />
    </>
  );
}

export default App;
