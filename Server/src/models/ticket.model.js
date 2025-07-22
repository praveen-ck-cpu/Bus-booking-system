const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    ticketid:{
        type:String,
        required:true,
        unique:true
    },
    busId:{
        type:String,
        required:true
    },
    busname:{
        type:String,
        required:true
    },
    phone:{
        type: Number,
        required: true
    },
    amount:{
        type:Number,
        required:true,
    },
    source:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    fromtime:{
        type:String,
        required:true
    },
    totime:{
        type:String,
        required:true
    },
    payID:{
        type:String,
        required:true
    },
    selectedSeats:{
        type:Array,
        default:[],
        required:true
    },
    bustype:{
        type:String,
        required:true
    },fullName:
    {
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("ticket",ticketSchema);