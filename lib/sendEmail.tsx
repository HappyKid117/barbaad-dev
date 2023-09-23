// utils/sendEmail.ts
import nodemailer from "nodemailer";

export async function sendEmail(name:string, message: string) {
	let finalMessage = "Name: " + name + "\n";
	finalMessage += "Message: \n" + message;

	try {
		// Create a transporter object using your SMTP settings
		const transporter = nodemailer.createTransport({
			service: "gmail", // e.g., "gmail" for Gmail
			auth: {
				user: process.env.SMTP_USERNAME,
				pass: process.env.SMTP_PASSWORD,
			},
		});

		// Define email data
		const mailOptions = {
			from: "blog@barbaad.dev",
			to: "aarabdhtiwari@gmail.com",
			subject: "Message from " + name,
			text: finalMessage,
		};

		const mailOptions2 = {
			from: "blog@barbaad.dev",
			to: "aarabdh@barbaad.dev",
			subject: "Message from " + name,
			text: finalMessage,
		};

		// Send the email
		await transporter.sendMail(mailOptions);
		await transporter.sendMail(mailOptions2);
	} catch (error) {
	}
}
