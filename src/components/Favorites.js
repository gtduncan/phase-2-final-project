import {React, useState} from 'react'
import ListingCard from './ListingCard.js'

const Favorites = ({favorites}) =>
{
    const mappedFavorites = favorites?.map((favorite) => {
        console.log(favorites)
        return <ListingCard property={favorite} favorites={favorites} isLiked={true}/>
    })
    return <div>
            <h1>Favorites</h1>
            <div className="listing-container">
            {mappedFavorites}
            </div>
        </div>
}

export default Favorites