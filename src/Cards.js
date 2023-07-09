import React from 'react'
import { Card } from "react-bootstrap";

const Cards = () => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src="https://www.howtogeek.com/wp-content/uploads/2020/04/iphone-camera-app.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1/100px180?text=Image cap"
            />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>

            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
};
export default Cards;
