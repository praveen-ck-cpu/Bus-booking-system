const sendMail = require("../middleware/email.middleware");
const genotp = require("../utils/genotp");
const storeddata_admin = {}

const adminlogin = async(req,res) =>{
    try {
        const {email} = req.query;
        const validity = 10*60*1000;
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        };
        const otp = genotp();
        const time = Date.now() + validity;
        storeddata_admin[email] = {otp,time};
        await sendMail(email,otp);
        res.status(200).json({message:"OTP Send Successfully" ,validity : "10 minutes"});
    } catch (error) {
        res.status(500).json({message:"Server Error" , error})
    }
}

module.exports = {adminlogin,storeddata_admin}