import React from "react";
import { Carousel, Image } from "react-bootstrap";
import pumarsx from "../images/pumarsx.jpg"
import airmax270 from "../images/airmax270.jpg"


const ProductCarousel = () => {
  return (
    <Carousel slide={true} className="bg-primary mb-4">
      <Carousel.Item>
      <Image src={pumarsx} alt="firts slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={airmax270} alt="second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
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

export default ProductCarousel;
