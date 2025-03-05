const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoConnect = require('./db/connect');
mongoConnect();
const path = require('path');
const cors = require('cors');

const authRouter = require('../server/Router/authRouter');
const adminRouter = require('../server/Router/adminRouter')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('../client'));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(authRouter)
app.use(adminRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}`);

})