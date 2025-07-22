const createbus_db  = require("../models/createbus.model");
const genbusid = require("../utils/busid");
const genrouteid = require("../utils/routeid");
const adminemail_db = require("../models/adminmail.model");

const createbusdata = async(req,res) =>{
    try {
       const requestData = req.body;
       console.log(requestData);
       if (!requestData) {
         return res.status(400).json({ message: "Bad request: No data provided" });
       }
       const checkadmin = await adminemail_db.findOne({adminid:requestData.adminid});
       console.log(checkadmin)
       if(!checkadmin) return res.status(404).json({message:"Data Not Found"});
       const busidfinal = genbusid();
       const routeidfinal = genrouteid();
   
       if (!busidfinal || !routeidfinal) {
         return res.status(500).json({ message: "Error generating bus or route ID" });
       }
         
       const data = {
         busid: busidfinal,
         routeid: routeidfinal,
         ...requestData,
       };
       console.log("data",data)
       const createbusdetails = await createbus_db.create(data);
       console.log("first")
       if (!createbusdetails) {
         return res.status(503).json({ message: "Service Unavailable" });
       }
   
       res.status(201).json({ message: "Bus details Created Successfully", data: createbusdetails });
     } catch (error) {
       res.status(500).json({ message: "Oops, Server Error", error: error.message });
     }
}

module.exports = createbusdata