const mongoose = require("mongoose");

const usermaildetailsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
      },
      userid:{
        type:String,
        unique:true,
        required:true
      }
});

module.exports = mongoose.model("user_email",usermaildetailsSchema);