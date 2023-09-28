"use server";

import { authOptions } from "@/lib/authOptions";
import { userModel } from "@/models/user.model";
import { getServerSession } from "next-auth";

export default async function getSession() {
	return await getServerSession(authOptions);
}

export async function getCurrentUser() {
	try {
		const session = await getSession();

		if (!session?.user?.email) {
			return null;
		}

		const { _doc } = await userModel.findOne({ email: session.user.email });

		console.log("Data, ", _doc);

		if (!_doc) {
			return null;
		}

		return {
			//USERNAME!
			username: _doc?.username || null,
			//NAME!
			name: _doc?.name || null,
			//EMAIL!
			email: _doc?.email || null,
			//EMAIL VERIFIED!
			emailVerified: _doc?.emailVerified || null,
			//MOBILE NUMBER!
			number: _doc?.number || null,
			//PASSWORD!
			password: _doc?.password || null,
			//POSITION!
			position: _doc?.position || null,
            //IMAGE!
            image: _doc?.image || null,
			_id: _doc?._id,
		};
	} catch (error: any) {
		return null;
	}
}
