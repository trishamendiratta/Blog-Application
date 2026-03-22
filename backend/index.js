const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));


mongoose.connect("mongodb://127.0.0.1:27017/blogDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));



app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
