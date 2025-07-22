const mongoose =  require("mongoose");
const routedetailsSchema = new mongoose.Schema({
    routeid:{
        type:String,
        required:true
    },
    busid:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    stop:{
        type:Array,
        default:[],
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    totalkm:{
        type:String,
        required:true
    }
});


const routeddetail = mongoose.model("routedetail",routedetailsSchema);
module.exports = routeddetail