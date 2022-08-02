import {React, useState} from "react";
import ListingContainer from "./ListingContainer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Accordion, Carousel, Nav} from "react-bootstrap";

function ListingCard({property}) {
    const {location, list_price, primary_photo, description, sqft, viewed, liked, photos} = property

    
   //console.log(photos)
    const mappedPhotos = () => {
        return photos.map((photo) => {
        return (
        <Carousel.Item>
            <img className="d-block w-100" id="card-image" variant="top" src={photo.href}/>
        </Carousel.Item>)

    })
}
// console.log(photos[0].href)
    
//console.log(photos[0].href)

    const [index, setIndex] = useState(0);
    const [currentPhoto, setCurrentPhoto] = useState(true)

    const setPhoto = () => {
        setCurrentPhoto(currentPhoto => !currentPhoto)
    }

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };
    
    return (
    <Card className = 'listing-card' style={{ width: '20rem' }}>
    <Card.Body>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
    {mappedPhotos()}
    </Carousel>
    </Card.Body>
        <Card.Title>{location.address.line}</Card.Title>
        <Card.Subtitle>{`${location.address.city}`}</Card.Subtitle>
        <Accordion className="details-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>
                <Card.Text>
                    Price: {list_price ? '$'+ list_price.toLocaleString('en-US') : 'N/A'}
                </Card.Text>
                <Card.Text>
                    Bed: {description.beds ? description.beds : 'N/A'}
                </Card.Text>
                <Card.Text>
                    Bath: {description.baths ? description.baths : 'N/A'}
                </Card.Text>
                <Card.Text>
                    Size: {description.sqft ? description.sqft + ' sq. feet' : 'N/A'}
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