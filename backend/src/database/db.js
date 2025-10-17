const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect("mongodb+srv://panigrahirudraprasad1_db_user:Fiesta123@cluster0.q0hbwex.mongodb.net/food-view?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("✅ MongoDB Atlas connected successfully");
    })
    .catch((err) => {
        console.log("❌ MongoDB connection error:", err);
    });
}

module.exports = connectDB;
