const mongoose = require("mongoose")

const connectToDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to mongodb")
    }
    catch(error){
        console.log("Error connecting to mongodb", error.message)
    }
}

module.exports = connectToDb