import Nav from './NavBar.js'
import SearchBar from './SearchBar.js'
import ListingContainer from './ListingContainer.js'
import {Pagination, Button} from 'react-bootstrap';


const Home = ({properties, currentPage, setCurrentPage, getLocation, setCurrentCity, setSort, currentState, setCurrentState, getFavorites, setMap, map}) => {
    
    return(
        <div>
        <SearchBar getLocation={getLocation} setCurrentPage={setCurrentPage} setCurrentState={setCurrentState} currentState={currentState} setCurrentCity={setCurrentCity} setSort={setSort} />
        <ListingContainer setMap={setMap} map={map} properties={properties} getFavorites={getFavorites}/>
        <div id="page-turner">
        <Pagination id="pagination" variant='dark'>
            {currentPage > 1 && <Pagination.Prev onClick={() => setCurrentPage(currentPage-1)} />}
            <Pagination.Item>{currentPage}</Pagination.Item>
            <Pagination.Next onClick={() => setCurrentPage(currentPage+1)} />
        </Pagination>
        </div>
        </div>
    )
}

export default Home