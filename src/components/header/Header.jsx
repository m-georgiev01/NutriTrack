import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav-link">
              NutriTrack
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/add" className="nav-link">
              Add
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
