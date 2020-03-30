const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define Rooutes
app.use("/api/repos", require("./api/repositories_endpoint"));
app.use("/api/bookmarks", require("./api/bookmark_endpoint"));
app.use("/api/users", require("./api/auth_endpoint"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
