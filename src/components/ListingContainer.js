import ListingCard from './ListingCard'
import Container from 'react-bootstrap/Container';


const ListingContainer = ({properties, setMap, getFavorites, map}) => {
    const mappedProperties = properties?.map((property) => {
        if(property.location.address.coordinate !== null && property.location.address.coordinate !== null)
        {
            return <ListingCard setMap={setMap} map={map} property={property} isLiked={false} getFavorites={getFavorites}/>
        }
        
    })
    return(
        <Container className="listing-container" fluid="md">
            {mappedProperties}
        </Container>
    )
}

export default ListingContainer