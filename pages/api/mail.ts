import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        const { name, email, message }: { name: string; email: string; message: string } = req.body;
        const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;

        // Set up the SMTP transporter using Sendinblue
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com",  // Sendinblue's SMTP server
            port: 587,  // Standard SMTP port
            auth: {
                user: process.env.SENDINBLUE_SMTP_USER,  // Your Sendinblue API key (SMTP username)
                pass: process.env.SENDINBLUE_SMTP_PASS,  // Your Sendinblue API key (SMTP password)
            },
        });

        const mailOptions = {
            from: process.env.SENDINBLUE_SENDER_EMAIL,  // This should be your authenticated email
            to: process.env.MAIL_TO,  // Your receiving email address
            subject: `${name.toUpperCase()} sent you a message from Portfolio`,
            text: `Email => ${email}`,
            html: msg.replace(/\r\n/g, "<br>"),
        };

        try {
            // Send email using Sendinblue SMTP
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Your message was sent successfully." });
        } catch (err) {
            // Type assertion to handle the error correctly
            if (err instanceof Error) {
                console.error("Error sending email:", err.message);
                res.status(500).json({ message: `There was an error sending your message. ${err.message}` });
            } else {
                console.error("Unexpected error:", err);
                res.status(500).json({ message: "An unexpected error occurred." });
            }
        }
    } else {
        // Handle non-POST requests
        res.status(405).json({ message: "Method Not Allowed" });
    }
}






