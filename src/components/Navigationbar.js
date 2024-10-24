import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiShopify } from "react-icons/si";
import { CgShoppingCart } from "react-icons/cg";
import {LinkContainer} from 'react-router-bootstrap';
import {Form, Button, FormControl} from 'react-bootstrap';

function Navigationbar({query,onQueryChange}) {
  return (
    <Navbar bg="primary" data-bs-theme="light">
      <Container fluid>
          <Nav className="me-auto d-flex align-items-center">
            <LinkContainer to="/">
              <Navbar.Brand>
              <SiShopify />
              </Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link className="custom-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="custom-link">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="custom-link">Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex w-50 gap-2 ms-auto">
            <FormControl
              type="search"
              placeholder="Search for products.."
              aria-label="Search"
              className="flex-grow-1"
              onChange={(event) =>{
              onQueryChange(event.target.value)}}
              value={query}
            />
          </Form>
          <Nav>
            <LinkContainer to="/cart">
              <Button variant="dark"><CgShoppingCart/> Go to Cart</Button>
            </LinkContainer>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;