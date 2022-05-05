require("dotenv").config();

const express = require('express');
const app = express();
const PORT = process.env.APP_PORT ?? 8080;
const connection = require("./config/db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/signup", (req, res) => {
    connection.query("SELECT * FROM user", (err, result) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.json(result)
        }
    })
});

app.post("/api/signup",   (req, res) => {
    const { email, password } = req.body;
    connection.query("INSERT INTO user (email, password) VALUES (?, ?)", [email, password], (err, result) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.json({"success" : "OK"})
        }
    })
})


app.listen(PORT, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
})