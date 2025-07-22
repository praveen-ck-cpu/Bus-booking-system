const { storeddata_admin } = require("../controllers/adminlogin.controller");
const adminidfunction = require("../utils/adminid");
const adminemail_db = require("../models/adminmail.model");

const adminverifylogin = async (req, res) => {
    try {
        const { email, otp } = req.query;
        if (!email || !otp) {
            return res.status(400).json({ message: "Bad Request. Try Again." });
        }

        const cleanEmail = email.trim().toLowerCase();
        const cleanOtp = otp.trim();

        const storedOtpData = storeddata_admin[cleanEmail]; 

        if (!storedOtpData) {
            console.log("No OTP found for:", cleanEmail); 
            return res.status(400).json({ message: "No OTP found. Request a new one." });
        }

        if (Date.now() > storedOtpData.time) {
            delete storeddata_admin[cleanEmail];
            return res.status(400).json({ message: "OTP has expired. Request a new one." });
        }

        if (storedOtpData.otp !== cleanOtp) {
            console.log("Invalid OTP entered:", cleanOtp);
            return res.status(400).json({ message: "Invalid OTP. Try again." });
        }

        delete storeddata_admin[cleanEmail]; 
        const adminid = adminidfunction(); 
        const data = {email:cleanEmail,adminid:adminid};
        const checkemail = await adminemail_db.findOne({email:cleanEmail});
        if (!checkemail) {
            const createadmin = await adminemail_db.create(data);
            return res.status(200).json(createadmin);
        }
        res.status(200).json(checkemail);
    } catch (error) {
        console.error("Error in OTP verification:", error); 
        res.status(500).json({ message: "Server Not Found", error });
    }
};

module.exports = adminverifylogin;
