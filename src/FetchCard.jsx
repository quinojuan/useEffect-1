import React, { useEffect, useState } from "react";
import getUser from "./helpers/getUser";

const initialUser = {
  name: "Juan",
  email: "quinojuan@gmail.com",
};

const initialPosts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

const FetchCard = () => {
  const [user, setUser] = useState(initialUser);
  const [posts, setPosts] = useState(initialPosts);

  const updateUser = () => {
    getUser().then((newUser) => {
      setUser(newUser);
    });
  };

  useEffect(() => {
    updateUser();
  }, []);

  console.log(user);
  return (
    <div>
      <button onClick={updateUser}>Another User</button>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>

      <br />

      <h2>Posts - user: {user.id}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchCard;
