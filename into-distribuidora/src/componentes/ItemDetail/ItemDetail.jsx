

const ItemDetail = ({item}) => {

    return(
        <div key={item.id} className="contenedor__producto">
            <h3 className="nombre__producto">{item.nombre}</h3>
            <img src={item.imagen} alt={item.nombre}/>
            <p>Precio $: {item.precio}</p>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail