const mongoose = require("mongoose");
const connect = () =>{
    try {
        mongoose.connect("mongodb+srv://krishna43835:5TcFP0bgrKfu84Gp@cluster0.wlxdj.mongodb.net/server32");
        console.log("connected");
    } catch (error) {
        window.alert("Server Not Found")
    }
}

module.exports = connect;