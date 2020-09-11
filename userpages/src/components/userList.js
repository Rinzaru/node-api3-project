import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  //   const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>User List: </h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>
            <button>{user.name}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
