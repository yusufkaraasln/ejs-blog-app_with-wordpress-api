const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
const ejs = require("ejs");
const path = require("path");
const blogRouter = require("./src/routes/blogRouter");



app.use(expressLayout);
app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname,"./src/views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", blogRouter);

app.listen(5000, () => console.log("> Server is up and running..."));
