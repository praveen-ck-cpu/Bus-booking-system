const routedetail_db = require("../models/route.model");

const searchbus = async(req,res) =>{
    try {
        const {source,destination,date} = req.query;
        if(!source||!destination||!date) return res.status(400).json({message:"Bad request: No data provided"});
        const val = await routedetail_db.aggregate([
            {
                $match:{
                    $or:[
                        {"source":{$in:[source]}},
                        {"stop":{$in:[source]}}
                    ],
                    destination,date
                }
            },{
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
            }
        ])
        if (!val) {
            return res.json({ message: "No routes found with the given destination" });
        };
        res.status(200).json(val)
    } catch (error) {
        res.status(500).json({message:"!Oops, Server Not Found"});
    }
};
module.exports = searchbus;