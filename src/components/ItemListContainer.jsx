import { useState, useEffect } from "react";
import { useParams } from "react-router"
import ItemList from "./ItemList";
import { getProductos, getProductsByCategory } from "../firebase/db";


function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoryName} = useParams();

  useEffect(() => {
    if (categoryName) {
      getProductsByCategory(categoryName)
      .then(productos => setItems(productos))
    } else {
      getProductos()
      .then(productos => setItems(productos))
      .catch(console.error)
    }


}, [categoryName])

  return (
    <ItemList items={items} text= "Bienvenido a SuperMercado M&M" />
  );
}

export default ItemListContainer;