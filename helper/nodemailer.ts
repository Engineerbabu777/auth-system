'use server';

import nodemailer from "nodemailer";
import { userModel } from "@/models/user.model";
import bcryptjs from "bcryptjs";

export const sendEmail = async (
	email: string,
	emailType: string,
	userId: string
) => {
	try {
		// CREATING TOKEN!
		const hashedToken = await bcryptjs.hash(userId, 10);

		if (emailType === "verify") {
			// UPDATE THE TOKEN VALUE !
			await userModel.findByIdAndUpdate(userId, {
				verifyToken: hashedToken,
				verifyTokenExpiry: Date.now() + 3600000,
			});
		} else if (emailType === "reset") {
			await userModel.findByIdAndUpdate(userId, {
				forgotPasswordToken: hashedToken,
				forgotPasswordExpiry: Date.now() + 3600000,
			});
		}

		var transport = nodemailer.createTransport({
			host: "sandbox.smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "bd51518365559e",
				pass: "2983f741e7469f",
			},
		});

		const mailOptions = {
			from: "eb.tech@dev.com",
			to: email,
			subject:
				emailType === "reset" ? "Reset your password" : "Verify your email",
			html: `<p>Click<a href="http://localhost:3000/verifyEmail?token=${hashedToken}">here</a>to${
				emailType == "verify" ? "Verify your email" : "Reset your password"
			}</p>`,
		};

		const response = await transport.sendMail(mailOptions);

        return response;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
