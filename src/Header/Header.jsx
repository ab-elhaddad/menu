import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Input from './Input';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark " variant="dark">
      <Container>
        <div className="sqr"></div>
        <Navbar.Brand href="#" className="fs-4">
          Restaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Input></Input>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
