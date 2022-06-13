import User from "./user";
import Search from "../search/search";

function BookmarkedUsers({ data }) {
  console.log(data, "Bookmarked");
  return (
    <div>
      <h1>
        <b>Bookmarked Users</b>
      </h1>
      <Search value={data} />
      {data?.map((item, ind) => (
        <User key={ind} user={item} />
      ))}
    </div>
  );
}

export default BookmarkedUsers;
