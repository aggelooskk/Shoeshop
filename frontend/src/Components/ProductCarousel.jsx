import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Image } from "react-bootstrap";
import { fetchProducts } from "../slices/productSlice";
import { Spinner } from "react-bootstrap";
import pumarsx from "../images/pumarsx.jpg";
import airmax270 from "../images/airmax270.jpg";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, status, error } = useSelector((state) => state.products);

  if (status === "loading")
    return (
      <p>
        <Spinner />
      </p>
    );
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <Carousel slide={true} className="bg-primary mb-4">
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <Image src={airmax270} alt={product.name} />
          <Carousel.Caption>
            <h3>{product.description}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
