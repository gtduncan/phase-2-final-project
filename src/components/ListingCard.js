import {React, useState} from "react";
import ListingContainer from "./ListingContainer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Accordion, Carousel, Nav, Popover, OverlayTrigger} from "react-bootstrap";
import GoogleMapReact from 'google-map-react';

function ListingCard({property, favorites, map, setMap, getFavorites, isLiked}) {


    const {location, list_price, primary_photo, description, sqft, photos, id} = property
    const AnyReactComponent = () => <img id='map-marker' src='../images/mapmarker.png'/>;

    const [like, toggleLike] = useState(isLiked)
    const [myId, setMyId] = useState(0)

    const googleMapProps = {
        center: {
          lat: location.address.coordinate.lat,
          lng: location.address.coordinate.lon
        },
        zoom: 10
      };
    
    
    const mappedPhotos = () => {
        return photos?.map((photo) => {
        return (
        <Carousel.Item>
            <img className="d-block w-100" id="card-image" variant="top" src={photo.href}/>
        </Carousel.Item>)

    })
}

const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
      <div style={{ height: '40vh', width: '100%' }}>
    
        <GoogleMapReact
  bootstrapURLKeys={{ key: "AIzaSyDej2gyib9LdZv2wQO2_6MInDwv-glcoeE&q"}}
  defaultCenter={googleMapProps.center ? googleMapProps.center : null}
  defaultZoom={googleMapProps.zoom}>
      <AnyReactComponent lat={location.address.coordinate.lat}
    lng={location.address.coordinate.lon}
    text="My Marker"/>
  </GoogleMapReact>
  </div>
      </Popover.Body>
    </Popover>
  );

    const [index, setIndex] = useState(0);
    const [currentPhoto, setCurrentPhoto] = useState(true)

    // api key- AIzaSyDej2gyib9LdZv2wQO2_6MInDwv-glcoeE&q


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
        const res1 = await fetch(`http://localhost:3000/favorites/${id ? id: myId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(property)
      })
        const data = await res1.json()
        console.log(data)
        getFavorites()
        }

    }
    
    return (
    <Card className = {id ? 'favorites-card':' listing-card' } bg="dark" style={{ width: '18rem' }}>
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
            <Accordion.Header className='accordion-header'>Details</Accordion.Header>
            <Accordion.Body className='accordion-body'>
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
                 <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <Button variant="success">Location</Button>
                </OverlayTrigger>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Card.Footer>
        <Button onClick={() => likeProperty()}id='like-button' variant="success">{like ? 'Unlike' : 'Like'}</Button>
    
        </Card.Footer>
    </Card> )}

    export default ListingCard;