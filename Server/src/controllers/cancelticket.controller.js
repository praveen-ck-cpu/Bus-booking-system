const ticket_db = require("../models/ticket.model");
const seat_db = require("../models/seats.model");

const cancelticket = async(req,res) =>{
    try {
        const reqdata = req.query;
    if(!reqdata) return res.status(400).json({message:"Bad Request ! try Again"});
    const finddata = await ticket_db.findOne(reqdata);  
    const busid = finddata.busId;
    const updatedSeats = await seat_db.updateOne(
        { busid },
        { $set: { "seats.$[elem].status": "available" } },
        {
          arrayFilters: [{ "elem.id": { $in: finddata.selectedSeats } }],
        }
      );
    const deldata = await ticket_db.deleteOne(reqdata);
    if (!deldata) return res.status(404).json({message:"Data not found"});
    res.status(200).json({message:"Ticket Was cancelled successfully"});
    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
}

module.exports = cancelticket