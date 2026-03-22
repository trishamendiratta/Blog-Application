import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  const token = localStorage.getItem("token");

  const latestPost = posts[0];       // first post
  const otherPosts = posts.slice(1); // remaining posts

  return (
    <div className="home-container">

      {/* Info Box */}
      <div className="info-box">
        <h3>Welcome to the Simple Blog!</h3>
        <p>Read the latest posts or create your own after registering / logging in.</p>
      </div>

      {/* Latest Post */}
      {latestPost && (
        <div className="latest-post">
          <h2>Latest Post</h2>
          <div className="post">
            <h3>{latestPost.title}</h3>
            <p>{latestPost.content}</p>
            <small>By {latestPost.author?.name || "Guest"}</small>
          </div>
        </div>
      )}

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <div className="other-posts">
          <h2>Other Posts</h2>
          {otherPosts.map(post => (
            <div key={post._id} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <small>By {post.author?.name || "Guest"}</small>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
}

export default Home;
