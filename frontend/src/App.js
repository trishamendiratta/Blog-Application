import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-heading">Blog App</div>

        {/* Navigation Links */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/create">Create Post</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
