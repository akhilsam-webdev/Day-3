const express = require("express");

const app = express();
app.use(express.json()); // middleware for json

const notes = [];

app.post("/create-note", (req, res) => {
  notes.push(req.body);
  res.send("note created suff");
});

app.get("/all-notes", (req, res) => {
  res.send(notes);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
