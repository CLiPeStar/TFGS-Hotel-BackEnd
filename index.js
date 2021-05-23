require("dotenv").config();
const path = require("path");

const express = require("express");
const cors = require("cors");

const { dbConnection } = require("./database/config");

//Create a server express
const app = express();

//Config CORS
app.use(cors());

// reading body
app.use(express.json());

//Open db
dbConnection();

//Public directory
app.use(express.static("public"));

//Routes
app.use("/api/login", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/uploads", require("./routes/uploads"));
app.use("/api/hotels", require("./routes/hotels"));
app.use("/api/receptionists", require("./routes/receptionists"));
app.use("/api/all", require("./routes/search"));

//
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(process.env.PORT, () => {
    console.log("Server listen in " + process.env.PORT);
});
