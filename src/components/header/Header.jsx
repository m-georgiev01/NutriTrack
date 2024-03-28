import { Container, Nav, Navbar } from 'react-bootstrap';

export function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">NutriTrack</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
