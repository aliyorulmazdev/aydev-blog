import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link'
import ThemeToggle from './ThemeToggle';

const BlogNavbar = ({theme, toggleTheme}) => {
  return (
    <Navbar
      variant={theme.type}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <div style={{color: theme.fontColor}}>ayDevBlog</div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div>
          <ThemeToggle onChange={toggleTheme} />
          </div>
          <Nav.Link
            as={() =>
              <Link href='/'>
                <div className="fj-navbar-item fj-navbar-link">Home</div>
              </Link>
            }
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default BlogNavbar;