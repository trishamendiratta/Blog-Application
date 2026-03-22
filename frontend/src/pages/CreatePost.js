import axios from "axios";
import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = async () => {
  const token = localStorage.getItem("token");
  if (!token) return alert("Login first");

  await axios.post(
    "http://localhost:5000/api/posts",
    { title, content },
    { headers: { Authorization: token } }
  );
};

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 style={{ color: "#2f855a", marginBottom: "15px" }}>
          Create New Blog
        </h2>

        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={e => setContent(e.target.value)}
        />

        <button onClick={submit}>Create Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
