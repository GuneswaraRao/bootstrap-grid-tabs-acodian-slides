import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
    Nav,
    Navbar,
    Container,
    NavDropdown,
    Modal,
    Button,
    Form
} from "react-bootstrap";

const Navigation = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" variant="pills" defaultActiveKey="/home">
                            <Nav.Link href="Alert">Alert</Nav.Link>
                            <Nav.Link href="Accod">Accod</Nav.Link>
                            <Nav.Link href="Sliders">Sliders</Nav.Link>
                            <Nav.Link href="Tabledata">Tabledata</Nav.Link>
                            <Nav.Link href="Cards">Cards</Nav.Link>
                            <Nav.Link href="Tabing">Tabing</Nav.Link>
                            <Nav.Link href="GridLayout">GridLayout</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="me-auto" variant="pills" defaultActiveKey="/home">
                            {/* <Nav.Link href="#deets"></Nav.Link> */}
                            <Nav.Link href="#" onClick={handleShow}>
                                <i class="fas fa-user"></i>
                            </Nav.Link>

                            {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default Navigation;
