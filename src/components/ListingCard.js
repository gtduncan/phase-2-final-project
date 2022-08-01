import React from "react";
import ListingContainer from "./ListingContainer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListingCard({property}) {
    const {location, price, image, bed, bath, sqft, viewed, liked} = property

    return (
    <Card className = 'listing-card' style={{ width: '20rem' }}>
    <Card.Body>
      <Card.Img variant="top" src={image} />
      </Card.Body>
      <Card.Body>
        <Card.Title>{location}</Card.Title>
        <Card.Text>
          Price: ${price}/mo
        </Card.Text>
        <Card.Text>
          Bed: {bed}
        </Card.Text>
        <Card.Text>
          Bath: {bath}
        </Card.Text>
        <Card.Text>
          {sqft} square feet
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="Success">Viewed: {viewed}</Button>
        <Button variant="success">Liked: {liked}</Button>
        </Card.Footer>
    </Card> )}

    export default ListingCard;