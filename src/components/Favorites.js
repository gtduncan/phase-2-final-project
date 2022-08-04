import {React, useState} from 'react'
import ListingCard from './ListingCard.js'

const Favorites = ({favorites, getFavorites}) =>
{
    const mappedFavorites = favorites?.map((favorite) => {
        console.log(favorites)
        return <ListingCard property={favorite} favorites={favorites} getFavorites={getFavorites} isLiked={true}/>
    })
    return <div>
            <div className="listing-container">
            {mappedFavorites}
            </div>
        </div>
}

export default Favorites