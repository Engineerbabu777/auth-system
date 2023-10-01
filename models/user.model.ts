import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		image: {
			default: null,
			type: String,
		},
		number: {
			type: Number,
			required: true,
		},
		emailVerified: {
			type: Boolean,
		},
		position: {
			type: String,
		},
		company: {
			type: mongoose.Schema.ObjectId,
			ref: "company",
		},
		forgotPasswordToken: String,
		forgotPasswordTokenExpiry: Date,
		verifyToken: String,
		verifyTokenExpiry: Date,
		isVerified: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export const userModel =
	mongoose?.models?.user || mongoose.model("user", userSchema);
