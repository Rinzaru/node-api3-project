import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const UserComments = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        axios
          .get(`http://localhost:8000/api/users/${id}/posts`)
          .then((res) => {
            setPosts(res.data);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>"{post.text}"</p>
          <p> --{post.postedBy}</p>
        </div>
      ))}
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default UserComments;
