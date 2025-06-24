import { CartWidget} from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router";
import { useState, useEffect } from "react";

 function NavBar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(cat => setCategories(cat));
    }, []);

    
    return (
    <Navbar expand="lg" bg= "dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to={'/'} as={Link} >SuperMercado M&M</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
            {categories.map(categorie => (<NavDropdown.Item to={`/category/${categorie}`} as={Link} key={categorie}>{categorie}</NavDropdown.Item>
            ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    )
} 

export default NavBar;