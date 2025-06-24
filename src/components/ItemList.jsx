
import Item from "./Item"

function ItemList({items, text}) {
  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <h1 style={{color: "red"}}>{text} </h1>
      <p style={{fontSize: " 20px"}}>Encontra lo que buscas!</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {items.map (prod => <Item key= {prod.id} prod= {prod} /> )}
      </div>
    </div>
  )
}

export default ItemList