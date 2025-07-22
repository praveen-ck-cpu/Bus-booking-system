const ticket_db = require("../models/ticket.model");
const busdetails_db = require("../models/bus.model");

const recentbooking = async (req, res) => {
  try {
    const { adminid } = req.query;
    if (!adminid) return res.status(400).json({ message: "Bad Request" });

    const totalbus = await busdetails_db.find({ adminid: adminid }, { busid: 1, _id: 0 });


    const Arrofbusid = totalbus.slice(0, 6).map(bus => bus.busid);

    
    if (Arrofbusid.length === 0) {
      return res.status(200).json([]);
    }

  
    const getdata = await ticket_db.aggregate([
      {
        $match: {
          busId: { $in: Arrofbusid },
        },
      },
      {
        $sample: { size: 6 }, 
      },
      {
        $project: {
          fullName: 1,
          amount: 1,
          ticketid: 1,
          phone: 1,
          selectedSeats: 1,
          updatedAt: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json(getdata);
  } catch (error) {
    console.error("Error in recentbooking:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = recentbooking;