import React, {useState} from "react";

function Search() {
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
