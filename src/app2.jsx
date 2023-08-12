import { useState, useEffect } from "react";
import useFetchData from "./hook/useFetchData";

function App() {
  const users = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
    (data) => data.map((item) => ({ id: item.id, name: item.name }))
  );
  const posts = useFetchData(
    "https://jsonplaceholder.typicode.com/posts/",
    (data) =>
      data.map((item) => ({ id: item.id, title: item.title })).slice(0, 10)
  );
  const comments = useFetchData(
    "https://jsonplaceholder.typicode.com/comments",
    (data) =>
      data.map((item) => ({ id: item.id, name: item.name })).slice(0, 10)
  );
  console.log(users.data);

  return (
    <div className="App">
      <div className="flex justify-around ">
        <div>
          <h1>Users</h1>
          <hr />
          {users.loading && <h3>Loading....</h3>}
          {users.error && <h3>{users.error}</h3>}
          {users.data?.map((user) => (
            <li className="list-none" key={user.id}>
              {user.name}
            </li>
          ))}
        </div>
        <div>
          <h1>Posts</h1>
          <hr />
          {posts.data?.map((post) => (
            <li className="list-none" key={post.id}>
              {post.title}
            </li>
          ))}
        </div>
        <div>
          <h1>Comments</h1>
          <hr />
          {comments.data?.map((comment) => (
            <li className="list-none" key={comment.id}>
              {comment.name}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

/**
 *
 */
