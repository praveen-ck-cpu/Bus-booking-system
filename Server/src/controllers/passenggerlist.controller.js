const busdetail_db = require("../models/bus.model");
const user_db = require("../models/user.model");
const ticket_db = require("../models/ticket.model");

const passengerlist = async (req, res) => {
  try {
    const { adminid } = req.query;
    if (!adminid) return res.status(400).json({ message: "Bad Request" });

    // Fetch only bus IDs belonging to the admin
    const totalbus = await busdetail_db.find({ adminid: adminid }, { busid: 1, _id: 0 });

    if (!totalbus.length) return res.status(404).json({ message: "No Buses Found" });

    const Arrofbusid = totalbus.map(bus => bus.busid);
    console.log(Arrofbusid)

    const ticketdata = await ticket_db.find({ busId: { $in: Arrofbusid } });

    // const uniquePhones = [...new Set(ticketdata.map(value => value.phone))];

    // const userdata = await user_db.find({ phone: { $in: uniquePhones } },{fullName:1,_id:0,age:1,phone:1});

    res.status(200).json(ticketdata);
  } catch (error) {
    console.error("Error in passengerlist:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = passengerlist;
