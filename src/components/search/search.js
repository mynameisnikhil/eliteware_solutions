import { useState } from "react";
import SearchBox from "./searchBox";
import SearchList from "./searchList";

function Search({ value }) {
  const [searchField, setSearchField] = useState("");

  const filteredList = value.filter((item) => {
    if (searchField !== "") {
      return item.login.toLowerCase().includes(searchField.toLowerCase());
    }
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="searchContainer">
      <input
        type="search"
        placeholder="Search People"
        onChange={handleChange}
      ></input>
      <SearchBox>
        <SearchList filteredList={filteredList} />
      </SearchBox>
    </div>
  );
}

export default Search;
