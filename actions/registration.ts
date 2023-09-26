"use server";

import { databaseConnect } from "@/lib/databaseConnect";
import { userModel } from "@/models/user.model";
import bcrypt from "bcrypt";

type Data = {
	username: String;
	email: String;
	password: String;
	number: Number;
};

export const newUserServerActionFunction = async (data: Data) => {
	
    try {
        // CONNECT TO DATABASE!
        databaseConnect();
        // CREATE USER DOCUMENT!
        const user = await userModel.create({
            username: data.username,
            email: data.email,
            password: data.password,
            number: data.number,
            imageUrl: null,
        });

        return await user;
        
    } catch (err: any) {
        console.log('Some Error Action-> ', err.message);
    }

};
