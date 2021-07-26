import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, [])


  return (
    <main>
      <ul className="cards">
       {listings.map(({id, description, image, location})=> {
        return <div>
                  <ListingCard setListings={setListings} listings={listings} id={id} description={description} image={image} location={location}/>
          </div>})}
      </ul>
    </main> 
  )
}

export default ListingsContainer;
