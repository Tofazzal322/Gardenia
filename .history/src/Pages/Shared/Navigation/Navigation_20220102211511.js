import React from 'react';
import { Button, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  return (
    <Navbar
      className="px-4 navigation-bar-main"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Navbar.Brand as={HashLink} to="/Home">
        Gardenia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link as={HashLink} to="/shops">
            Shops
          </Nav.Link>
          <Nav.Link as={HashLink} to="/offers">
            Offers
          </Nav.Link>
          <Nav.Link as={HashLink} to="/FQA">
            FQA
          </Nav.Link>
          <Nav.Link as={HashLink} to="/Contact">
            Contact
          </Nav.Link>
          <Nav.Link as={HashLink} to="/Contact">
            {user.displayName}
          </Nav.Link>
          {user ?  (
            <Nav.Link as={HashLink} to="/Login">
              Login
            </Nav.Link>
        

          <Button
                className=" nav-items-btn m-0  text-secondary "
                onClick={logOut}
                variant="button"
              >
                Logout
              </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
 
export default Navigation;
