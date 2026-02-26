import React from "react";
import usePosts from "./Store/usePosts"

const Posts = () => {
  const { posts, fetchPosts } = usePosts(); // 👈 must call hook

  return (
    <div>
      {posts.length === 0 ? (
        <button onClick={fetchPosts}>Fetch Posts</button>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;