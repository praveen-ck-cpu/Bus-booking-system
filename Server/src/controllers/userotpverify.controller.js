const { storeddata } = require("../controllers/userlogin.controller");
const useridfunction = require("../utils/userid");
const useremail_db = require("../models/usermail.model");

const verifylogin = async (req, res) => {
    try {


        const { email, otp } = req.query;
        if (!email || !otp) {
            return res.status(400).json({ message: "Bad Request. Try Again." });
        }

        const cleanEmail = email.trim().toLowerCase();
        const cleanOtp = otp.trim();

        const storedOtpData = storeddata[cleanEmail]; 

        if (!storedOtpData) {
            console.log("No OTP found for:", cleanEmail); 
            return res.status(400).json({ message: "No OTP found. Request a new one." });
        }

        if (Date.now() > storedOtpData.time) {
            delete storeddata[cleanEmail];
            return res.status(400).json({ message: "OTP has expired. Request a new one." });
        }

        if (storedOtpData.otp !== cleanOtp) {
            console.log("Invalid OTP entered:", cleanOtp);
            return res.status(400).json({ message: "Invalid OTP. Try again." });
        }

        delete storeddata[cleanEmail]; 
        const userid = useridfunction(); 
        const data = {email:cleanEmail,userid:userid};
        const checkemail = await useremail_db.findOne({email:cleanEmail});
        if (!checkemail) {
            await useremail_db.create(data);
        }
        res.status(200).json({ message: "OTP verified successfully!"});
    } catch (error) {
        console.error("Error in OTP verification:", error); 
        res.status(500).json({ message: "Server Not Found", error });
    }
};

module.exports = verifylogin;
