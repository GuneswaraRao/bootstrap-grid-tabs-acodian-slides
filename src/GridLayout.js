import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import Cards from "./Cards";

const GridLayout = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Cards />
                </Col>
                <Col md={{ span: 4, offset: 4 }}>
                    <Cards />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Cards />
                </Col>
                <Col md={4}>
                    <Cards />
                </Col>
                <Col md={4}>
                    <Cards />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Cards />
                </Col>
                <Col md={6}>
                    <Cards />
                </Col>
            </Row>
        </Container>
    );
};
export default GridLayout;
