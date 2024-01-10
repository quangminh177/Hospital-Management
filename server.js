const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//rest object
const app = express();

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
    console.log(
        `Server is running in ${process.env.NODE_MODE}. MODE on port ${process.env.PORT}`
        .bgCyan.white
    );
});
