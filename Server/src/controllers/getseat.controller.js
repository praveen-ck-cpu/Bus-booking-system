const seat_db = require("../models/seats.model");

const getseat = async (req, res) => {
  try {
    const { busid } = req.query;   
    if (!busid) {
      return res.status(400).json({ success: false, message: "Bus ID is required." });
    }
    const getdata = await seat_db.aggregate([
      {
        $match: {
          busid
        }
      },
      {
        $project: {
          _id: 0,
          busid: 0,
          __v: 0
        }
      }
    ]);
    if (getdata.length === 0) {
      return res.status(404).json({ success: false, message: "No seats found for this bus." });
    }
    res.status(200).json({ success: true, data: getdata[0].seats });
  } catch (error) {
    res.status(500).json({message:error.message });
  }
};

module.exports = getseat;
