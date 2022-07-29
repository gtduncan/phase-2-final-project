import Nav from './Nav.js'
import SearchBar from './SearchBar.js'
import ListingContainer from './ListingContainer.js'

const Home = ({properties}) => {
    
    return(
        <div>
        <SearchBar/>
        <ListingContainer properties={properties}/>
        </div>
    )
}

export default Home