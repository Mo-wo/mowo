import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, email, message} = req.body;
    

        //Create a transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
            }
        });

        //Setup email data
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_TO,
            subject: `Message from ${name}`,
            text: message
        }

        //Send email with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ error: "Fialed to send email" });
          }
          res.status(200).json({ message: "Email sent successfully" });
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} not allowed`);
    }
}