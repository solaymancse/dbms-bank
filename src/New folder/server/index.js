require("dotenv").config({ path:"./.env"});
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/userRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const errorHandler = require("./middleware/error");
const app = express();
app.use(cookieParser());


app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(express.json());

app.use("/api", router);
app.use("/customer", require("./routes/customerRoute"));


// error handler
app.use(errorHandler);
// database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  const server = app.listen(process.env.PORT || 5000);
  console.log("DB Connected Successfull!!!");
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(()=> process.exit(1));
});


