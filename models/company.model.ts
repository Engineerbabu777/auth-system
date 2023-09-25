import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
	{
		//COMPANY NAME!
		name: {
			type: String,
			unique: true,
			default: null,
		},
		//COMPANY ADDRESS!
		address: {
			type: String,
			default: null,
		},
		// EMPLOYEES NUMBER!
		employees: {
			type: String,
			default: null,
		},
		// WEBSITE LINK!
		website: {
			type: String,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

export const companyModel = mongoose.model("company", companySchema);
