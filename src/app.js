const express = require("express");
const cors = require("cors");

// const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {

});

app.post("/repositories", (request, response) => {

});

app.put("/repositories/:id", (request, response) => {

});

app.delete("/repositories/:id", (req, res) => {

});

app.post("/repositories/:id/like", (request, response) => {

});

module.exports = app;
