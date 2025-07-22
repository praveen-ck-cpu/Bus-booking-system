const routedetail_db = require("../models/route.model");
const busdetail_db = require("../models/bus.model");

const Getdata = async (req, res) => {
     try {
            const val = await routedetail_db.aggregate([
                {
                    $lookup:{
                        from:"busdetails",
                        localField:"busid",
                        foreignField:"busid",
                        as:"fine"
                    }
                },
                {
                    $unwind:{
                        path:"$fine"
                    }
                },
                {
                    $project:{
                        _id:1,
                        source:1,
                        destination:1,
                        totalkm:1,
                        final:"$fine"
                    }
                },
                {
                    $sample: { size: 6 }
                }
            ])
            if (!val) {
                return res.json({ message: "No routes found with the given destination" });
            };
            res.status(200).json(val)
        }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = Getdata;