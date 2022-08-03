import Nav from './NavBar.js'
import SearchBar from './SearchBar.js'
import ListingContainer from './ListingContainer.js'
import {Pagination, Button} from 'react-bootstrap';


const Home = ({properties, currentPage, setCurrentPage, getLocation, setCurrentCity, setSort, currentState, setCurrentState}) => {
    
    return(
        <div>
        <SearchBar getLocation={getLocation} setCurrentState={setCurrentState} currentState={currentState} setCurrentCity={setCurrentCity} setSort={setSort} />
        <ListingContainer properties={properties}/>
        <div id="page-turner">
        <Pagination variant='dark'>
            {currentPage > 1 && <Pagination.Prev onClick={() => setCurrentPage(currentPage-1)} />}
            <Pagination.Item>{currentPage}</Pagination.Item>
            <Pagination.Next onClick={() => setCurrentPage(currentPage+1)} />
        </Pagination>
        </div>
        </div>
    )
}

export default Home