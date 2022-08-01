import ListingCard from './ListingCard'
import Container from 'react-bootstrap/Container';

const ListingContainer = ({properties}) => {
    const mappedProperties = properties.map((property) => {
        return <ListingCard property={property}/>
    })
    return(
        
        <Container className="listing-container" fluid="md">
            {mappedProperties}
        </Container>
    )
}

export default ListingContainer