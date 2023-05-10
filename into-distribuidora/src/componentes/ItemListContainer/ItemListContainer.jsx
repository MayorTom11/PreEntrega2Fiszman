import "./ItemListContainer.scss"
import ItemList from "../ItemList/ItemList"
import {useCatalogo} from "../..//hooks/useCatalogo"


export const ItemListContainer = () => {

    const {loading, productos, categoriaId} = useCatalogo()

    return (
        <div className="list__container">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} categoria={categoriaId}/>
            }
        </div>
    )
}