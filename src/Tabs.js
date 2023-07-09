
import React from 'react';
import { Col, Nav, Row, Tab } from "react-bootstrap";

const Tabing = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <p>
                                {" "}
                                Or whether doth my mind, being crown'd with you, Drink up the
                                monarch's plague, this flattery? Or whether shall I say, mine
                                eye saith true, And that your love taught it this alchemy, To
                                make of monsters and things indigest Such cherubins as your
                                sweet self resemble, Creating every bad a perfect best, As fast
                                as objects to his beams assemble? O! 'tis the first, 'tis
                                flattery in my seeing, And my great mind most kingly drinks it
                                up:
                            </p>{" "}
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <p>
                                {" "}
                                Ah! wherefore with infection should he live, And with his
                                presence grace impiety, That sin by him advantage should
                                achieve, And lace itself with his society? Why should false
                                painting imitate his cheek, And steel dead seeming of his living
                                hue? Why should poor beauty indirectly seek Roses of shadow,
                                since his rose is true? Why should he live, now Nature bankrupt
                                is, Beggar'd of blood to blush through lively veins?
                            </p>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};
export default Tabing;
