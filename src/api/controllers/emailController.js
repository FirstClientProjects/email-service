const ErrorResponse = require('../../utils/ErrorResponse');
const SuccessResponse = require('../../utils/SuccessResponse');
const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {

    const { email } = req.body;
    const subject = "Change the password";
    const text = 'Click on the link to change your password';

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'firstclient646@gmail.com',
                pass: '200529'
            }
        });
        var mailOptions = {
            from: 'firstclient646@gmail.com',
            to: email,
            subject: subject,
            text: text
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json(
            new SuccessResponse(
                200,
                "Send email query was successful",
                "Send email query was successful",
            )
        );
    } catch (error) {
        res.status(500).json(
            new ErrorResponse(
                500,
                "Send email internal server error",
                error.message
            )
        );
    }
}

module.exports = {
    sendEmail
}