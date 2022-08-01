import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = () =>
{
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }
      
      function showPosition(position) {
        alert("Latitude: " + position.coords.latitude +
        " Longitude: " + position.coords.longitude)
      }
    return(
        <div id="search-div">
        <Form.Control id="search-bar" pe="search" placeholder="Where are you looking?"/>
        <Button id="search-button" variant="success">Find</Button>{' '}
        <Button id="location-button" variant="dark" onClick={() => getLocation()}>Get My Location</Button>
        </div>
    )
}

export default SearchBar