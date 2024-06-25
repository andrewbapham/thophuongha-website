import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OffcanvasHeader from "react-bootstrap/esm/OffcanvasHeader";

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand>Tho Phuong Ha</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Offcanvas classname="mx-5">
        <OffcanvasHeader>Tho Phuong Ha</OffcanvasHeader>
        <Nav className="me-auto">
          <Nav.Link>Tho</Nav.Link>
          <Nav.Link>Nhac</Nav.Link>
          <Nav.Link>Nhac</Nav.Link>
          <Nav.Link>Hinh Anh</Nav.Link>
          <Nav.Link>Luu Niem</Nav.Link>
          <Nav.Link>Lien Lac</Nav.Link>
        </Nav>
      </Navbar.Offcanvas>
    </Navbar>
  );
}

export default CustomNavbar;
