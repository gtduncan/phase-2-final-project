import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = () =>
{
    return(
        <div>
        <Form.Control type="search" placeholder="Where are you looking?"/>
        <Button variant="success">Find</Button>{' '}
        </div>
    )
}

export default SearchBar