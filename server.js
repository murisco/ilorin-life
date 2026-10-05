const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json({
    game: "Ilorin Life",
    status: "online",
    message: "Welcome to Ilorin Life!"
  });
});

app.listen(PORT, () => {
  console.log(`Ilorin Life running on port ${PORT}`);
});
