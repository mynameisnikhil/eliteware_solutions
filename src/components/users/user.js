import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { bookmarkUser, removeUser, unBookmarkUser } from "../redux/actions";

function User({ user }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const userState = useSelector((state) => state.bookmark);
  const userPayload = userState.payload;

  function handleCange(event) {
    if (event.target.checked) {
      dispatch(bookmarkUser(user));
    }
    if (!event.target.checked) {
      dispatch(unBookmarkUser(user));
    }
    setChecked(!checked);
  }

  useEffect(() => {
    for (let char of userPayload) {
      if (user.id === char.id) {
        return setChecked(true);
      }
    }
    setChecked(false);
  }, [userPayload]);

  return (
    <div className="userContainer">
      <div className="userIndex">
        <input
          onChange={handleCange}
          className="checkbox"
          type="checkbox"
          checked={checked}
        ></input>
      </div>
      <div className="user">
        <img className="userImage" src={user.avatar_url} alt="user" />
        <div className="username">
          <b>{`${user.login}`}</b>
        </div>
      </div>
    </div>
  );
}

export default User;
