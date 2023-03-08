import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/logo.jpg";
import "../Style.css";
import Cartwidget from "./Cartwidget";

function NavBar() {
  return (
    <Navbar className="nav" bg="light" expand="lg">
      <Container>
        <Link to={"/"}>
          <div className="logoNav">
            <img className="imgLogo" src={Logo} alt="Logo" />
          </div>
        </Link>
        <Navbar.Brand className="titleNav">
          Súper Chévere
          <span className="NavLink">
            Tienda Online de Productos Venezolanos
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className= "navItems me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ul className="navbar-nav mr-auto navBar">
              <Nav.Link>
                <li className="NavItem">
                  <NavLink to="/" className="link">
                    Inicio{" "}
                  </NavLink>
                </li>
              </Nav.Link>

              <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                <li>
                  <NavLink to="/catalogue" className="link">
                    Todos los Productos
                  </NavLink>
                </li>

                <li className="NavItem">
                  <NavLink to={`/category/${"LACTEOS"}`} className="link">
                    Lacteos
                  </NavLink>
                </li>

                <li className="NavItem">
                  <NavLink to={`/category/${"ALMACEN"}`} className="link">
                    Almacen
                  </NavLink>
                </li>

                <li className="NavItem">
                  <NavLink to={`/category/${"CONGELADOS"}`} className="link">
                    Congelados
                  </NavLink>
                </li>
              </NavDropdown>

              <Nav.Link>
                <li className="NavItem">
                  <NavLink to="/about" className="link">
                    Nosotros
                  </NavLink>
                </li>
              </Nav.Link>
            </ul>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Product"
              className="me-2 buttonSearch NavLink"
              aria-label="Search"
            />
            <Button className="buttonSecond NavLink" variant="outline-success">
              Buscar
            </Button>
          </Form>
          {/* ICON CARTWIDGET*/}
          <div>
            <NavLink to={"/cart"}>
              <Cartwidget />
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
