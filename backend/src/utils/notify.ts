import nodemailer from "nodemailer";
import Africastalking from "africastalking";

// --------- EMAIL NOTIFICATION ---------
export const sendEmailNotification = async (request: any) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFY_EMAIL,
      subject: `New Service Request from ${request.name}`,
      text: `
        Name: ${request.name}
        Email: ${request.email}
        Phone: ${request.phone}
        Service: ${request.service}
        Description: ${request.description}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email notification sent!");
  } catch (err) {
    console.error("Email notification error:", err);
  }
};

// --------- SMS NOTIFICATION ---------
export const sendSmsNotification = async (request: any) => {
  try {
    const africastalking = Africastalking({
      apiKey: process.env.AT_API_KEY,
      username: process.env.AT_USERNAME,
    });

    const sms = africastalking.SMS;

    const response = await sms.send({
      to: [process.env.NOTIFY_PHONE || ""],
      message: `New Service Request:\n${request.name}\n${request.phone}\n${request.service}`,
    });

    console.log("SMS notification sent!", response);
  } catch (err) {
    console.error("SMS notification error:", err);
  }
};