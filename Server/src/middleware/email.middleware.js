const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"nagarajansridhar48@gmail.com",
        pass:"abgx halh sycv wmzu"
    }
});

const sendMail = async(email,otp) =>{
    const mailrequest = {
        from:"nagarajansridhar48@gmail.com",
        to:email,
        subject:"Your OTP Code",
        html: `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 400px; margin: auto;">
                <h2 style="color: #2D89EF;">Your OTP Code</h2>
                <p style="font-size: 16px; color: #555;">Use the OTP below to complete your verification process. This code is valid for <strong>10 minutes</strong>.</p>
                <div style="font-size: 22px; font-weight: bold; padding: 10px; background: #f4f4f4; border-radius: 5px; display: inline-block;">
                    ${otp}
                </div>
                <p style="color: #999; font-size: 14px; margin-top: 10px;">If you didn't request this code, please ignore this email.</p>
            </div>
        `
    };
    return transporter.sendMail(mailrequest);
};

module.exports = sendMail;

