'use server';

import { databaseConnect } from "@/lib/databaseConnect";
import { userModel } from "@/models/user.model";

export const updateUserAction = async (user: any) => {
	try {
		databaseConnect();

		const userData = await userModel.findByIdAndUpdate(user.id, {
            username:user?.username,
            email:user?.email,
            position:user?.position,
            number:user?.number,
            image:user?.image,

        }, {
			upsert: true,
		});
        console.log('USER 2-> ',userData)

		return {  success: true, message: "user updated!" };
	} catch (err: any) {
        console.log('ERROR: ',err.message);
		return { failed: true, message: "updating failed!", error: err.message };
	}
};
