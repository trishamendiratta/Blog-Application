import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
    localStorage.setItem("token", res.data.token);
    navigate("/");
  } catch (err) {
    alert(err.response?.data?.msg || "Registration failed");
  }
};

  return (
    <div className="form-container">
      <h2 style={{ textAlign: "center", color: "#2e7d32" }}>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
