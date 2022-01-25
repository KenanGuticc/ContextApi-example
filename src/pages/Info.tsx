import React, { useContext } from "react";
import { UsersContext } from "../stores/user.context";
import { IUser } from "../stores/user.type";

export const Info: React.FC = () => {
  const { users, removeUser } = useContext(UsersContext);

  const deleteUser = (user: IUser): void => {
    removeUser(user);
  };

  return (
    <div>
      {users.map((user: IUser) => (
        <div className="User" key={user.id}>
          <div>
            <h1>{user.fullName}</h1>
            <p>{user.username}</p>
          </div>
          <button onClick={() => deleteUser(user)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
