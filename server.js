const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
  ]);
});

app.post("/api/users", (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: "User created",
    user
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
