import User from "./user";
import Search from "../search/search";

function Users({ data }) {
  return (
    <div>
      <h1>
        <b>Users</b>
      </h1>
      <Search value={data} />
      <div>
        {data.map((item, ind) => (
          <User key={ind} user={item} />
        ))}
      </div>
    </div>
  );
}

export default Users;
