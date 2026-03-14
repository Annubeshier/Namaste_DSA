import { useState, useEffect } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  //debounce logic
  useEffect(() => {
    const timer = setTimout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  //API call
  useEffect(() => {
    if (debouncedSearch) {
      console.log("api call using ", debouncedSearch);
    }
  }, [debouncedSearch]);
  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placehonder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
