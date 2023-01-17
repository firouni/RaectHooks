import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbarr () {
    return (
        <div className="nav-container">
        <Navbar bg="wheat" variant="wheat">
            <Navbar.Brand href="#home"> FLIX </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="">Movies</Nav.Link>
                <Nav.Link href="">Series</Nav.Link>
                <Nav.Link href="">Documentary</Nav.Link>
            </Nav>
        </Navbar>
        </div>
    )
}

export default Navbarr;