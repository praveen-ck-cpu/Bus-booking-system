const routedetail_db = require("../models/route.model");

const suggestions = async(req,res) =>{
    try {
        const data = req.query.query;
        if(!data) return res.status(401).json({message:"null"});
        const getdata = await routedetail_db.find({
            $or:[
                {"source" :{ $regex: data}},
                {"stop":{$regex: data}}
            ]
    }).limit(10);
    if (!getdata) return res.status(404).json({message:"Data not found"})
    const dummy =[...new Set( getdata.map((value)=>value.source || value.stop))];
    res.status(200).json(dummy);
    } catch (error) {
        res.status(500).json({message :"Server Error" ,error});
    }
} 
module.exports = suggestions