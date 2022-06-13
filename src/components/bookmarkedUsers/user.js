import { useDispatch } from "react-redux/es/exports";
import { unBookmarkUser } from "../redux/actions";
import { useState } from "react";

function User({ user }) {
  const dispatch = useDispatch();

  function handleCange() {
    dispatch(unBookmarkUser(user));
  }

  return (
    <div className="userContainer">
      <div className="userIndex">
        <input
          onClick={handleCange}
          className="checkbox"
          type="checkbox"
          checked
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
