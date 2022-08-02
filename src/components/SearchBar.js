import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = ({getLocation}) =>
{
    return(
        <div id="search-div">
        <Form.Control id="search-bar" pe="search" placeholder="Where are you looking?"/>
        <Button id="search-button" variant="success">Find</Button>{' '}
        <Button id="location-button" variant="dark" onClick={() => getLocation()}>Get My Location</Button>
        </div>
    )
}

export default SearchBar