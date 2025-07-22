const busdetails_db = require("../models/bus.model");
const seat_db = require("../models/seats.model");

const totalbooking = async (req, res) => {
    try {
        const { adminid } = req.query;
        if (!adminid) return res.status(400).json({ message: "Bad Request" });

        // Fetch all buses for the given admin ID
        const totalbus = await busdetails_db.find({ adminid: adminid });
        const Arrofbusid = totalbus.map(bus => bus.busid);

        // Fetch all seat data in parallel using Promise.all
        const seatDataArray = await Promise.all(
            Arrofbusid.map(busid => seat_db.findOne({ busid }))
        );

        // Extract booked seat statuses
        const totalbooking_status = seatDataArray
            .filter(seatData => seatData && seatData.seats) // Ignore missing data
            .map(seatData => Object.values(seatData.seats).map(seat => seat.status || null));


        // Extract only booked seats
        const booked_values = totalbooking_status
            .flat() // Flatten nested arrays
            .filter(status => status === 'booked');

        console.log("Total Booked Seats:", booked_values.length);

        // Return the count of booked seats
        const totalbooking_data = booked_values.length;
        const active_buses = Arrofbusid.length
        res.status(200).json({totalbooking_data,active_buses});

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server Error", error });
    }
};

module.exports = totalbooking;