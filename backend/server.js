// HERE WE START THE SERVER 
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/database/db');
connectDB();

app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})