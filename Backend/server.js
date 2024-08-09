const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/pageRouter");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Connect to Mongoose (MongoDB)
mongoose
  .connect("YOUR_MongoDB_CONNECTION_LINK_HERE")
  .then(() => console.log("DB connected Successfully"))
  .catch((e) => console.log(e));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

// Routes
app.use("/", router);

// errorHandler
app.use(errorHandler);

// Start Server
const PORT = 8085;
app.listen(PORT, console.log(`Server is Running on ${PORT}`));
