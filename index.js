const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const asyncHandler = require("express-async-handler");
const cors = require('cors');
const createUser = require('./middleware/create-user');
const updateUser = require('./middleware/update-user');
const deleteUser = require('./middleware/delete-user');
const getUser = require('./middleware/get-user');

require('dotenv').config();

const corsOptions = {
    origin: process.env.CORSORIGINURL,
    optionsSuccessStatus: 200,
}

const client = new MongoClient(process.env.DBURL);
const db = client.db('cryptos');
const usersCollection = db.collection("users");

app.get('/',cors(corsOptions),asyncHandler(async (req, res) => {
    res.send("OK");
}));

app.get('/create-user',cors(corsOptions),createUser(usersCollection));

app.get('/delete-user',cors(corsOptions),deleteUser(usersCollection));

app.get('/update-user',cors(corsOptions),updateUser(usersCollection));

app.get('/get-user',cors(corsOptions),getUser(usersCollection));

app.listen(process.env.PORT, () => {
    console.log("app listening");
})