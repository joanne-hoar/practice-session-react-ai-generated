import { Link } from 'react-router-dom'
import './Header.css'

function Header({title}) {
    return(
        <header>
            <h1>{title}</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
        </header>
    );
}

export default Header;
