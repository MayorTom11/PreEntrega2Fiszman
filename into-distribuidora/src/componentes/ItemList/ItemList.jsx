import "./ItemList.scss"
import {Link} from 'react-router-dom'

const ItemList = ({items, categoria}) => {

    return (
        <div>
            <h2>Bienvenido a nuestra lista de {categoria}</h2>
            <hr />
            {
                items.map((prod) => (
                    <div key={prod.id} className="contenedor__producto">
                        <h3 className="nombre__producto">{prod.nombre}</h3>
                        <img src={prod.imagen} alt={prod.nombre}/>
                        <p>Precio $: {prod.precio}</p>
                        <Link to={'/producto/' + prod.id}><button>Ver mas</button></Link>
                    </div>
                ))
            }
        </div>
    )

}

export default ItemList