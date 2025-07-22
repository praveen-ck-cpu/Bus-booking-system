const ticket_db = require("../models/ticket.model");
const ticket = require("../utils/ticketid");

const createticket = async(req,res) =>{
    try {
        const request = req.body;
        if (!request) return res.status(400).json({message:"Bad Request"});
        const {_id,amount,busdata,userdata,...rest} = request;
        const {fullName,phone} = userdata;
        const ticketid = ticket();
        const rest2 = {...rest,...busdata,amount,ticketid,fullName,phone};
        if (!rest2 || Object.keys(request).length === 0) {
            return res.status(400).json({ message: "Bad request: No data provided" });
          };
        const createticketdata = await ticket_db.create(rest2);
        res.status(200).json(createticketdata);
    } catch (error) {
        res.status(500).json({message:"Server Not Found",error});
    }
}

module.exports = createticket