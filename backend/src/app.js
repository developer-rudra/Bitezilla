// we create server here

const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const cors = require('cors');
const foodPartnerRoutes = require('./routes/food-partner.routes');

const app = express();
app.use(cookieParser()); //as the middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // frontend url
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("hello world");
})
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/food-partner', foodPartnerRoutes);

module.exports = app;
