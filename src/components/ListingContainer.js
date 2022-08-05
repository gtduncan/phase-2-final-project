import ListingCard from './ListingCard'
import {Container} from 'react-bootstrap';


const ListingContainer = ({properties, setMap, currentPage, setCurrentPage, getFavorites, map}) => {
    const mappedProperties = properties?.map((property) => {
        if(property.location.address.coordinate !== null && property.location.address.coordinate !== null)
        {
            return <ListingCard setMap={setMap} map={map} property={property} isLiked={false} getFavorites={getFavorites}/>
        }
        
    })
    return(
        <div>
        <Container className="listing-container" fluid="md">
            {mappedProperties}
        </Container>
        </div>
    )
}

export default ListingContainer