const ticket_db = require("../models/ticket.model");
const showticket = async(req,res) =>{
    try {
        const reqdata = req.query;
        if(!reqdata) return res.status(400).json({message:"Bad Request ! try Again"});
        const getticket = await ticket_db.findOne(reqdata);
        if(!getticket) return res.status(404).json({message:"Data not Found"});
        res.status(200).json(getticket);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = showticket;