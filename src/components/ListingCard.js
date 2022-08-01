import React from "react";
import ListingContainer from "./ListingContainer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Accordion } from "react-bootstrap";

function ListingCard({property}) {
    const {location, list_price, primary_photo, description, sqft, viewed, liked} = property

    return (
    <Card className = 'listing-card' style={{ width: '20rem' }}>
    <Card.Body>
      <Card.Img id="card-image" variant="top" src={primary_photo ? primary_photo.href : 'N/A'} />
      </Card.Body>
        <Card.Title>{location.address.line}</Card.Title>
        <Card.Subtitle>{`${location.address.city}`}</Card.Subtitle>
        <Accordion className="details-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>
                <Card.Text>
                    Price: {list_price ? '$'+ list_price : 'N/A'}
                </Card.Text>
                <Card.Text>
                    Bed: {description.beds}
                </Card.Text>
                <Card.Text>
                    Bath: {description.baths}
                </Card.Text>
                <Card.Text>
                    {description.sqft} square feet
                 </Card.Text>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Card.Footer>
        <Button variant="Success">Viewed: {viewed}</Button>
        <Button variant="success">Liked: {liked}</Button>
        </Card.Footer>
    </Card> )}

    export default ListingCard;