const mongoose = require("mongoose");

const adminmaildetailsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
      },
      adminid:{
        type:String,
        unique:true,
        required:true
      }
});

module.exports = mongoose.model("admin_email",adminmaildetailsSchema);