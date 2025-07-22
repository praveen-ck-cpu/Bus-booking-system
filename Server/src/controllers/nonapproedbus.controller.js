const busdetail_db = require("../models/bus.model");
const createbus_db = require("../models/createbus.model");

const nonapprovedbus = async (req, res) => {
  try {
    const { adminid } = req.query;
    if (!adminid) return res.status(400).json({ message: "Bad request" });

    const pendingdata = await createbus_db.find({ adminid: { $in: adminid } });

    if (!pendingdata.length) return res.status(404).json({ message: "Data Not Found" });
    
    res.status(200).json(pendingdata);
  } catch (error) {
    console.error("Error in nonapprovedbus:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = nonapprovedbus;
