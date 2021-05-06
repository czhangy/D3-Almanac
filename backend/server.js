// Boilerplate
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const itemsRouter = require('./routes/items');
const classesRouter = require('./routes/classes');
app.use('/items', itemsRouter);
app.use('/classes', classesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
