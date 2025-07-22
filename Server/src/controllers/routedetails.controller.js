const routedetail_db = require("../models/route.model");
const createbus_db = require("../models/createbus.model");
const autoroute = require("../utils/routeid");
const createbusroute = async(req,res) =>{
    try {
        let { body } = req;

        const requestData = {
            ...body,
            routeid: autoroute()
        };
        if (!requestData || Object.keys(requestData).length === 0) {
            return res.status(400).json({ message: "Bad request: No data provided" });
          }
        const checkdata = await createbus_db.exists({busid:requestData.busid});
        if(!checkdata) return res.status(404).json({message:"Bus not found"});
        
        const createroutedetails = await routedetail_db.create(requestData);
        
        if(!createroutedetails) return res.status(503).json({message:"Service Unavailable"});
        await createbus_db.deleteOne(requestData.busid);
        res.status(201).json({message:"Busroute details Created Successfull"});
    } catch (error) {
        console.log(error.message);
        
        res.status(500).json({message:"!Oops, Server Not Found"});
    }
};

module.exports = createbusroute;