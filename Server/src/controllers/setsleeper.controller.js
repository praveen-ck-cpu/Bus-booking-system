const seat_db = require("../models/seats.model");

const generateSeats = (busid) => {
    const seats = [];
    for (let i = 1; i <= 6; i++) {
      const seatId = `A${i}`;
      seats.push({ id: seatId, status: 'available' });
    }
    
    for (let i = 1; i <= 6; i++) {
      const seatId = `B${i}`;
      seats.push({ id: seatId, status: 'available' });
    }

    // seats.push({ id: '10', status: 'available' });

    for (let i = 1; i <= 6; i++) {
      const seatId = `C${i}`;
      seats.push({ id: seatId, status: 'available' });
    }

    for (let i = 1; i <= 6; i++) {
      const seatId = `X${i}`;
      seats.push({ id: seatId, status: 'available' });
    }
    for (let i = 1; i <= 6; i++) {
        const seatId = `Y${i}`;
        seats.push({ id: seatId, status: 'available' });
      }
      for (let i = 1; i <= 6; i++) {
        const seatId = `Z${i}`;
        seats.push({ id: seatId, status: 'available' });
      }
    return { busid, seats };
  };


  const setsleeper = async(req,res) =>{
    try {
    const {busId,selectedSeats} = req.body;
    if(!busId || !selectedSeats) return res.status(400).json({message:"Bad Request. ! Please try Again"});
    const busid = busId;
    let seatData = await seat_db.findOne({busid});
    if (!seatData) {
      const newSeatData = generateSeats(busid);
      seatData = await seat_db.create(newSeatData);
    }
    const updatedSeats = await seat_db.updateOne(
        { busid },
        { $set: { "seats.$[elem].status": "booked" } },
        {
          arrayFilters: [{ "elem.id": { $in: selectedSeats } }],
        }
      );
    if (updatedSeats.modifiedCount > 0) {
    res.status(200).json({message:"Seats booked successfully!"});
    } else {
    res.status(404).json({message:"No seats updated. Check seat availability."});
    }
    } catch (error) {
        res.status(500).json({message:"Error handling booking:", error});
    }   
  } ;

module.exports = setsleeper;