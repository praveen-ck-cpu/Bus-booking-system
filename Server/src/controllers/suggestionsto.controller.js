const routedetail_db = require("../models/route.model");

const suggestionsto = async (req, res) => {
  try {
    const data = req.query.query;
    if (!data) {
      return res.status(400).json({ message: "Query parameter is missing" });
    }

    const regex = new RegExp(data, 'i');
    const getdata = await routedetail_db.find({ destination: { $regex: regex } });

    if (!getdata) {
      return res.status(404).json({ message: "Destination not found" });
    }
const dummy =[...new Set( getdata.map((value)=>value.destination || ""))];

    res.status(200).json(dummy);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = suggestionsto;
