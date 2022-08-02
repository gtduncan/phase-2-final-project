import Nav from './NavBar.js'
import SearchBar from './SearchBar.js'
import ListingContainer from './ListingContainer.js'
import Button from 'react-bootstrap/Button';

const Home = ({properties, currentPage, setCurrentPage, getLocation}) => {
    
    return(
        <div>
        <SearchBar getLocation={getLocation}/>
        <ListingContainer properties={properties}/>
        <div id="page-turner">
        {currentPage > 1 && <Button bg='dark' className="item" variant='dark' onClick={() => setCurrentPage(currentPage-1)}>{'<-'}</Button>}
        <p id="number" className="item">{currentPage}</p>
        <Button bg='dark' variant='dark' className="item" onClick={() => setCurrentPage(currentPage+1)}>{'->'}</Button>
        </div>
        </div>
    )
}

export default Home