import React from 'react'
import { useState } from "react";
import { Carousel } from "react-bootstrap";

const Sliders = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.howtogeek.com/wp-content/uploads/2020/04/iphone-camera-app.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.howtogeek.com/wp-content/uploads/2017/09/changing-the-camera-format-setting-on-iphone.jpg?width=900&trim=1,1&bg-color=000&pad=1,1/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.howtogeek.com/wp-content/uploads/2017/09/open-the-settings-app-on-iphone.png?width=1198&trim=1,1&bg-color=000&pad=1,1/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Sliders;
