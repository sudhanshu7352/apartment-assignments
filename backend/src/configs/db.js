const mongoose = require("mongoose");

const connect =()=>{
    return mongoose.connect(
        "mongodb+srv://sudhanshu:sudhanshu_123@cluster0.nuovi.mongodb.net/apartment?retryWrites=true&w=majority"
    )
}
module.exports =connect