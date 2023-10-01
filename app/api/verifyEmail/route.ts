
import { sendEmail } from "@/helper/nodemailer";
import { databaseConnect } from "@/lib/databaseConnect";
import { userModel } from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(request: NextResponse) {
	try {

        await databaseConnect();
		const body = await request.json();
		const { token } = body;

		console.log('TOKEN',token);

		// FIND THE USER WITH TOKEN!
		const userDoc = await userModel.findOne({
			verifyToken: token,
			verifyTokenExpiry: { $gt: Date.now() },
		});

        console.log('USERDOC!-> ',userDoc)

		// IF USER NOT FOUND RETURN NO USER FOUND RESPONSE !!
		if (!userDoc) {
			return NextResponse.json({ error: "No user found" }, { status: 404 });
		}

		console.log(userDoc);

        // SEND EMAIL!
        
		userDoc.isVerified = true;
		userDoc.verifyToken = undefined;
		userDoc.verifyTokenExpires = undefined;

		await userDoc.save();

		return NextResponse.json(
			{ message: "User verified", success: true },
			{ status: 200 }
		);
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
