import User from "../users/user";

function SearchList({ filteredList }) {
  return (
    <>
      {filteredList.map((item) => (
        <User user={item} />
      ))}
    </>
  );
}

export default SearchList;
