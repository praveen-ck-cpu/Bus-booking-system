const mongoose = require("mongoose");

const createbusSchema = new mongoose.Schema({
    adminid:{
        type:String,
        unique:true,
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
    },busnumber:
    {
        type:String,
        unique:true,
        required:true
    },
    rcbookno:{
        type:String,
        unique:true,
        required:true
    },
    license:{
        type:String,
        unique:true,
        required:true
    },
    status: {
        type: Boolean,
        default: false
      }
});

module.exports = mongoose.model("createbus",createbusSchema);