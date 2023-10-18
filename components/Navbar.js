import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const BlogNavBar = () => {
  return (
    <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">ayDev Blog</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={() => <Link href='/' className="fj-navbar-item fj-navbar-link">Home</Link>} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavBar;
