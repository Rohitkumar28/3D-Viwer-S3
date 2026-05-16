const mongoose = require("mongoose")


function connectDb() {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Databse connect to Servre")
    })
    .catch(err => {
        console.log("Error to connect");
        console.log(err);
    })
}


module.exports = connectDb;