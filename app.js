const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Middlewares
app.use('/inventory', () => {
    console.log('hello')
})

// Routes
app.get('/inventory', (req, res) => {
    res.send('We are home')
})

app.get('/', (req, res) => {
    res.send('We are home')
})

// connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => console.log("Connected to DB")
);

app.listen(3000);





// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://k12CSapp:<password>@cluster0.tngu3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// mongodb+srv://bnelson:shopProj1!@shopify.tngu3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority