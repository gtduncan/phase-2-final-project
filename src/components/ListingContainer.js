import ListingCard from './ListingCard'

const ListingContainer = ({properties}) => {
    const mappedProperties = properties.map((property) => {
        return <ListingCard property={property}/>
    })
    return(
        <div>
            {mappedProperties}
        </div>
    )
}

export default ListingContainer