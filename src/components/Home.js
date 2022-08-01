import Nav from './NavBar.js'
import SearchBar from './SearchBar.js'
import ListingContainer from './ListingContainer.js'
import Button from 'react-bootstrap/Button';

const Home = ({properties, currentPage, setCurrentPage}) => {
    
    return(
        <div>
        <SearchBar/>
        <ListingContainer properties={properties}/>
        <Button bg='dark' variant='dark' onClick={console.log(currentPage)}>Right</Button>
        </div>
    )
}

export default Home