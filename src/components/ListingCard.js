import React from "react";
import ListingContainer from "./ListingContainer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ListingCard({property}) {
    const {location, price, image, bed, bath, sqft, viewed, liked} = property

    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
      <Card.Header>{location}</Card.Header>
        <Card.Title>{location}</Card.Title>
        <Card.Text>
          Price: {price}
        </Card.Text>
        <Card.Text>
          Bed: {bed}
        </Card.Text>
        <Card.Text>
          Bath: {bath}
        </Card.Text>
        <Card.Text>
          Square Feet: {sqft}
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
    </Card>) }

    export default ListingCard;