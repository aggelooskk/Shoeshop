import React from 'react'
import { Card, Button, } from "react-bootstrap"

const Product = ({ product }) => {
  return (
    <Card className='my-3 py-3 rounded' >
      <Card.Body>
      <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text>
            Shoes for everyone
          </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
