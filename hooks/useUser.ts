import { newUserServerActionFunction } from "@/actions/registration";
import { updateUserAction } from "@/actions/updateUser";
import ErrorHandler from "@/components/Notifications/Error";
import Success from "@/components/Notifications/Success";
import { User } from "@/types/newUser";
import { userValidator } from "@/utils/userValidator";
import { createElement } from "react";
import toast from "react-hot-toast";

export default function useUser() {
	// CREATE USER!
	const createUser = async (user: User) => {
		try {
			// VALIDATE DATA!
			const result = userValidator(user);

			const data = {
				username: user.username,
				email: user.email,
				password: user.password,
				number: parseInt(user.number as string),
			};

			// CALL SERVER FUNCTION!
			if (result) {
				const response = await newUserServerActionFunction(data);
				toast((t: any) =>
					createElement(Success, {
						t: t,
						message: "Account Created Successful!",
					})
				);

				console.log(response);
			}
		} catch (err: any) {
			toast((t: any) =>
				createElement(ErrorHandler, { t: t, message: err.message })
			);
			console.log("SOME ERROR OCCUR-> ", err.message);
		}
	};

	// EDIT USER!
	const updateUser = async (setMode: any, user: any) => {
		const userObject = {
			email: user.email,
			username: user.username,
			number: user.number,
			password: "testpassword",
			isLoading: false,
		};

		// VALIDATE DATA!
		userValidator(userObject);

		// AFTER VALIDATION MAKE API CALL!
		const result = await updateUserAction(user);

		// IF SOME ERROR HAPPEN!
		if (result.failed) {
			toast((t: any) =>
				createElement(ErrorHandler, { t: t, message: result.message })
			);
			return;
		}

		if (result.success) {
			toast((t: any) =>
				createElement(Success, {
					t: t,
					message: result.message,
				})
			);
			setMode("view");
			return;
		}

		// AFTER SUCCESS SET-MODE TO VIEW MODE!
	};

	// DELETE USERS!

	// GET USER!

	return { createUser, updateUser };
}
