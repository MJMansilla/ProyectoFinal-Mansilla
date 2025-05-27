import { CartWidget} from "./CartWidget"
export function NavBar() {
    return (
        <nav>
            <ul>
                <li><img src="../.././public/Assets/logo.png" alt="Logo"/></li>
                <li><img src="../.././public/Assets/bebida.png" alt="Bebidas"/>Bebidas</li>
                <li><img src="../.././public/Assets/fresco.png" alt="Fresco"/>Fresco</li>
                <li><img src="../.././public/Assets/electrodomestico.png" alt="Electrodomesticos"/>Electrodomesticos</li>
                <li><img src="../.././public/Assets/hogar.png" alt="Hogar"/>Hogar</li>
                <li><img src="../.././public/Assets/libreria.png" alt="Libreria"/>Libreria</li>
                <CartWidget />
            </ul>

        </nav>
    )
} 