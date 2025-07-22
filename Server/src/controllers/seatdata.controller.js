const routedetail_db = require("../models/route.model");

const seatdata = async(req,res) =>{
    try {
        const reqdata = req.query.busid;
        if(!reqdata) return res.status(400).json({message:"Bad request"})
        const getdata = await routedetail_db.aggregate([
            {
            $match:{
                busid:reqdata
            }
        },
        {
            $lookup:{
                from:"busdetails",
                localField:"busid",
                foreignField:"busid",
                as:"val"
            }
        },
        {
            $unwind:{
                path:"$val"
            }
        },{
            $unset:["val._id","val.busid","val.totalseats","val.routeid","val.hours","val.__v"]
        },
        {
            $project:{
                source:1,
                destination:1,
                busdata:"$val"
            }
        }
    ]);
    if(!getdata) return res.status(404).json({message:"Data Not Found"});
    res.status(200).json(getdata);
    } catch (error) {
        res.status(500).json({message:"Server Issue"},error)
    }
}
module.exports = seatdata;