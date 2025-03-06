const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const mongoConnect = require('./db/connect');

dotenv.config();
mongoConnect();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routers
const authRouter = require('./Router/authRouter');
const adminRouter = require('./Router/adminRouter');

app.use(authRouter);
app.use(adminRouter);

// Catch-all for frontend routing (must be after API routes)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT,  () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
