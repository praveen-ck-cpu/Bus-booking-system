const busdetail_db = require("../models/bus.model");
const genbusid = require("../utils/busid");
const genrouteid = require("../utils/routeid");
const adminemail_db = require("../models/adminmail.model");

const createbuses = async (req, res) => {
  try {
    const requestData = req.body;
    console.log(requestData)
    if (!requestData || Object.keys(requestData).length === 0) {
      return res.status(400).json({ message: "Bad request: No data provided" });
    }
    const checkadmin = await adminemail_db.findOne({adminid:requestData.adminid});
    if(!checkadmin) return res.status(404).json({message:"Data Not Found"});

    if (!busidfinal || !routeidfinal) {
      return res.status(500).json({ message: "Error generating bus or route ID" });
    }
      
    const data = {
      ...requestData,
    };
    const createbusdetails = await busdetail_db.create(data);
    if (!createbusdetails) {
      return res.status(503).json({ message: "Service Unavailable" });
    }

    res.status(201).json({ message: "Bus details Created Successfully", data: createbusdetails });
  } catch (error) {
    res.status(500).json({ message: "Oops, Server Error", error: error.message });
  }
};

module.exports = createbuses;
