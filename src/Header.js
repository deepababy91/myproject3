import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header= () => {
    return (
       //using reactt bootstrap navigation bar 
        <Navbar className="color-nav"  expand="lg" >
      <h2>Mytodoapp</h2>
      {/*<LinkContainer to="/">
  <Navbar.Brand>My Todoapp</Navbar.Brand>
    </LinkContainer>*/}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  {/*ml-auto will pull your navbar-nav to the right*/}
    <Nav className="ml-auto" style={{fontSize:'20px'}}>
        <LinkContainer to="/">
      <Nav.Link></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/signup">
      <Nav.Link>Sign in</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/todo">
      <Nav.Link>Todos</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
      <Nav.Link>Contact</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default Header