import React, {useState} from "react";

function ListingCard({setListings, listings, id, description, location, image}) {
  const [favorited, setFavorite] = useState(false)

  function handleClick() {
    setFavorite(!favorited)
  }

  function deletePost() {
    fetch("http://localhost:6001/listings/" + id, {
      method: "DELETE",
      headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
      }
    } 
    )
    const newListings = listings.filter((element) => element.id !== id)
    setListings(newListings)
  } 

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={deletePost} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
