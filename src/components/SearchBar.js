import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import ListingCard from './ListingCard';
//import myVideo from '.../public/images/house.mp4'

const SearchBar = ({ getLocation, setCurrentCity, setCurrentState, setSort }) =>
{
const [search, setSearch] = useState()
const stateAbbreviations = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

const statesMapped = stateAbbreviations.map((state) => {
    return <option value={state}>{state}</option>
})


const handleSearchBar = (e) =>
{
    e.preventDefault()
    search.replace(' ', '%20')
    console.log(search)
    setCurrentCity(search)
}

const handleSetState = (e) =>
{
    setCurrentState(e.target.value)
}

const handleChange = (e) => {
    setSort(e.target.value)
}
    return(
        <div id="search-div">
            <video autoplay muted loop id="myVideo">
              <source src='public/images/house.mp4' type='video/mp4'/> 
            </video>
        <Form id="search-form">
            <Form.Control className='search-item' id="search-bar" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Where are you looking?"/>
            <Form.Select className='search-item' onChange={handleSetState} aria-label="State Select">
            <option>State</option>
            {statesMapped}
            </Form.Select>
            <Form.Select className='search-item'onChange={handleChange}>
                <option placeholder='relevant'>Relevant</option>
                <option value='newest'>Newest</option>
                <option value='price_low'>Price (Lowest First)</option>
                <option value='price_high'>Price (Highest First)</option>
                {/* <option value='price_reduce'>Price Reduce</option> */}
               {/*<option value='largest_sqft'>Size (sqft)</option> */}

            </Form.Select>
            <Button id="search-button" className= 'search-buttons' type='submit' onClick={(e)=> handleSearchBar(e)} variant="success">Find</Button>{' '}
        </Form>
        </div>
    )
}

export default SearchBar