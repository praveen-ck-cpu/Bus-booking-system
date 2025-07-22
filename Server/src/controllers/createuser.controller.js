const userdata_db = require("../models/user.model");
const useremail_db = require("../models/usermail.model");
const newuserid = require("../utils/userid");

const createuser = async (req, res) => {
  try {
    const request = req.body;
    if (!request)
      return res.status(400).json({ message: "Bad request: No data provided" });
    const checkuser = await useremail_db.findOne({ email: request.email });
    if (checkuser) {
      const userid = checkuser.userid;
      if (!userid) {
        return res.status(500).json({ message: "Error generating User ID" });
      }
      const sourcedata = { ...request, userid: userid };
      const user = await userdata_db.create(sourcedata);
      if (!user) {
        return res.status(503).json({ message: "Service Unavailable" });
      }
      res.status(200).json({ message: "User Data Created Successfully" });
    }
    else{
      const userid = newuserid();
      if (!userid) {
        return res.status(500).json({ message: "Error generating User ID" });
      }
      const sourcedata = { ...request, userid: userid };
      const user = await userdata_db.create(sourcedata);
      if (!user) {
        return res.status(503).json({ message: "Service Unavailable" });
      }
      res.status(200).json({ message: "User Data Created Successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = createuser;
