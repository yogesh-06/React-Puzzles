import React, { useState } from "react";

const JsonPlaceholder = () => {
  const [userData, setUserData] = useState([]);
  getUserAndPostsData();
  async function getUserAndPostsData() {
    try {
      const usersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersData = await usersResponse.json();
      const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await postsResponse.json();
      const users = [];
      usersData.forEach((user) => {
        const posts = postsData.filter((post) => post.userId === user.id);
        users.push({
          ...user,
          posts: posts,
        });
      });
      // console.log("await users", users);
      setUserData(users);
    } catch (error) {
      // console.log(error);
    }
  }
  return (
    <>
      <div className="row ms-3">
        {userData.map((userName) => {
          return (
            <div className="card m-3 col-12 " style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">{userName.posts[0].title}</p>
              </div>
              <h5 className="text-end card-title">{userName.name} </h5>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default JsonPlaceholder;
