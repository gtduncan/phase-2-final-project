import React from "react";
import ListingContainer from "./ListingContainer";

function ListingCard({property}) {
    const {location, price, image, bed, bath, sqft, viewed, liked} = property

    return (
        <li className="card">
            <div className="image">
                <span className="price">{price}</span>
                <img src={image} alt={"image placeholder"} />
            </div>

            <div classname ="card-details">
            <span>{location}</span>
            <span>{price}</span>

            </div>


        </li> ) }

    export default ListingCard;