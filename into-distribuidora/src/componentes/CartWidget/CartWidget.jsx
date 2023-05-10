import cart from '../../assets/Cart.png'

const CartWidget = () => {

    return(
        <div>
            <img src={cart} alt="carrito"/>
            <span>0</span>
        </div>
    )
}

export default CartWidget