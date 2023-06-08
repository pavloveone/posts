import {  Nav, Navbar } from 'react-bootstrap';


export const AppHeader = () => {

    return (
        <Navbar bg="dark" variant="dark">
          <Nav className="me-auto">
            <Nav.Link href="posts">Список постов</Nav.Link>
            <Nav.Link href="about-me">Обо мне</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
    );
}