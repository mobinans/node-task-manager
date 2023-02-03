const connectDB = require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
