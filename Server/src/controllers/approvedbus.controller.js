const busdetail_db = require("../models/bus.model");

const approvedbus = async(req,res) =>{
    try {
        const {adminid} = req.query;   
        if(!adminid) return res.status(400).json({message:"Bad request"});
        const getdata = await busdetail_db.find({adminid:adminid});
        if(!getdata) return res.status(404).json({message:"Data Not Found"});
        res.status(200).json(getdata);
    } catch (error) {
        res.status(500).json({message:"Server Error"},error);
    }

}

module.exports = approvedbus;