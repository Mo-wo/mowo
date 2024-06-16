import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import emailjs from "emailjs-com";

export const sendEmail = (templateParams: any) => {
  emailjs
    .send(
      "service_ulrzr7d",
      "template_b9tkgsq",
      templateParams,
      "-7GJ6XhuhDCgBRkTO"
    )
    .then(
      (res) => {
        console.log("SUCCESS!", res.status, res.text);
      },
      (error) => {
        console.log("FAILED!", error);
      }
    );
};
