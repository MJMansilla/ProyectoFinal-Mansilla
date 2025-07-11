import { CartWidget} from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router";


function NavBar() {
    return (
    <Navbar expand="lg" bg= "dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to={'/'} as={Link} >SuperMercado M&M</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item
                to='/category/electrodomesticos'
                as={Link}
                >
                Electrodomesticos
              </NavDropdown.Item>
              <NavDropdown.Item
                to='/category/Papeles'
                as={Link}
                >
                Papeles
              </NavDropdown.Item>
              <NavDropdown.Item
                to='/category/Quesos'
                as={Link}
                >
                Quesos
              </NavDropdown.Item>
              <NavDropdown.Item
                to='/category/Harinas'
                as={Link}
                >
                Harinas
              </NavDropdown.Item>
              <NavDropdown.Item
                to='/category/Gaseosas'
                as={Link}
                >
                Gaseosas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    )
} 

export default NavBar;