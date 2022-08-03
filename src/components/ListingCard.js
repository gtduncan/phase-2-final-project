import {React, useState} from "react";
import ListingContainer from "./ListingContainer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Accordion, Carousel, Nav} from "react-bootstrap";

function ListingCard({property}) {
    const [myId, setMyId] = useState(0)
    const {location, list_price, primary_photo, description, sqft, photos, id, isLiked} = property

    const [like, toggleLike] = useState(isLiked)

    const mappedPhotos = () => {
        return photos?.map((photo) => {
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

    const likeProperty = async () => {
        if(!like)
        {
        toggleLike(!like)
        const res = await fetch('http://localhost:3000/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(property)
      })
        const data = await res.json()
        console.log(data.id)
        setMyId(data.id)
        }
        if(like)
        {
        toggleLike(!like)
        const res = await fetch(`http://localhost:3000/favorites/${id ? id: myId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(property)
      })
        const data = await res.json()
        console.log(data)
        }
    }
    
    return (
    <Card className = 'listing-card' style={{ width: '18rem' }}>
    <Card.Body>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
    {mappedPhotos()}
    </Carousel>
    </Card.Body>
        <Card.Title>{location.address.line}</Card.Title>
        <Card.Subtitle>{`${location.address.city}, ${location.address.state}`}</Card.Subtitle>
        <Card.Subtitle id='zip-code'>{location.address.postal_code}</Card.Subtitle>
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
        <Button onClick={() => likeProperty()}id='like-button' variant="success">{like ? 'Unlike' : 'Like'}</Button>
        </Card.Footer>
    </Card> )}

    export default ListingCard;