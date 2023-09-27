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
		imageUrl: {
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
			required: true,
		},
		company: {
			type: mongoose.Types.ObjectId,
			ref: "company",
		},
	},
	{
		timestamps: true,
	}
);

export const userModel =
	mongoose.models.user || mongoose.model("user", userSchema);
