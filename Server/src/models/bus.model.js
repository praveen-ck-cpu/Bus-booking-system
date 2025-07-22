const mongoose = require("mongoose");
const busdetailsSchema = new mongoose.Schema({
    adminid:{
        type:String,
        required:true
    },
    busid:{
        type:String,
        unique:true
    },
    busname :{
        type:String,
        required:true
    },
    bustype:{
        type:String,
        required:true
    },
    totalseats:{
        type:Number,
        required:true
    },
    routeid:{
        type:String
    },
    fromtime:{
        type:String,
        required:true
    },
    totime:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    hours:{
        type:String,
        required:true
    }
});
const busdetail = mongoose.model("busdetail",busdetailsSchema);
module.exports = busdetail;