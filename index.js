const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Set extended option explicitly to true
app.use(bodyParser.json({ extended: true, limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true })); // Set extended option explicitly to true
app.use(cors());
//routes
const pizzaoutes = require('./routes/PizzaRoutes');
app.use('/pizz', pizzaoutes);

const port = 4200; // lowercase 'port' according to conventions
const DB_NAME = "your_database_name"; // Specify your database name

const DB_URL = `mongodb+srv://yamanmahawar10:mongoyam123@cluster0.bhzaptc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch((err) => {
    console.error(err);
});

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello world",
    });
});
