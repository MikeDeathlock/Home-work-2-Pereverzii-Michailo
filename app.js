const express = require("express");
const shopRoutes = require("./routes/shopRoutes");
const PORT = 5555;
const app = express();

app.use(shopRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));