import { useEffect, useState } from "react";
import Users from "./components/users/users";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./components/redux/actions";

import BookmarkedUsers from "./components/bookmarkedUsers/bookmarkedUsers";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const x = [...Array(10).keys()];

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [page]);

  const state = useSelector((state) => state.userReducer);
  const userState = useSelector((state) => state.bookmark);
  const payload = state.payload;
  const userPayload = userState.payload;

  return (
    <>
      <Header />
      {state.loading ? (
        <h1 className="App">
          <b>Loading...</b>
        </h1>
      ) : (
        <div>
          <div className="App">
            <Users data={payload} />
            <BookmarkedUsers data={userPayload} />
          </div>
          <div className="pagination">
            {x.map((item) => (
              <button onClick={() => setPage(item)}>{item + 1}</button>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
