import './NavBar.scss'
import IntoLogo from '../../assets/IntoLogoBCKHR.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return(
        <header className='header'>
            <div className='header__container'>
                {<Link to="/">
                        <img src={IntoLogo} className="logo" alt="Into Logo" />
                </Link>}
                <nav className='navbar'>
                    <ul>
                        <li>
                            <Link to="/productos/aperitivos" className='navbar__link'>Aperitivos</Link>
                        </li>
                        <li>
                            <Link to="/productos/vinos" className='navbar__link'>Vinos</Link>
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar