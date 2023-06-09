import {  Container, Image, Nav, Navbar } from 'react-bootstrap';
import avatar from '../../images/my_avatar.jpeg';


export const AppHeader = () => {

    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'space-between' }}>
          <Nav className="mr-auto">
            <Nav.Link href="/posts">Список постов</Nav.Link>
            <Nav.Link href="/about-me">Обо мне</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
          <Image src={avatar} roundedCircle style={{ width: '50px', height: 'auto' }} className='mr-2' />
            <div>
              <div className="font-weight-bold">Павлов Александр</div>
              <div className="text-muted">pavloveone@yandex.ru</div>
            </div>
          </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}