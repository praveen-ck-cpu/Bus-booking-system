const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  busid: { type: String, required: true,unique:true },
  seats: [
    {
      id: { type: String, required: true },
      status: { type: String },
    },
  ],
});

const Seat = mongoose.model("Seat", seatSchema);
module.exports = Seat;