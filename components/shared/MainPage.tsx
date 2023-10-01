"use client";

import React from "react";
import CardComponent from "./CardComponent";
import UserMain from "../UserInfo/UserMain";
import CompanyMain from "../CompanyInfo/CompanyMain";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { sendEmail } from "@/helper/nodemailer";
import toast from "react-hot-toast";

type Props = {
	user: any;
};

export default function MainPage({ user }: Props) {
	const { status: sessionStatus, data: session } = useSession();
	const router = useRouter();

	if (sessionStatus === "loading") {
		return (
			<>
				<div className="flex justify-center items-center flex-col gap-1">
					<ClipLoader color={"#141E46"} size={70} />
					<p className="text-lg text-[#141E46]">Loading content...</p>
				</div>
			</>
		);
	}

	if (!session) {
		router.push("/login");
	}

	// SEND VERIFICATION MAIL!
	const sendMail = async () => {
		const response = await sendEmail(user?.email, "verify", user?._id);

		toast.success('Success')

		console.log('RESPONSE DATA-> ',response);
	};

	return (
		<>
			{session && (
				<div className="flex flex-col gap-2 ">
					{!user?.isVerified && (
						<p className="flex items-center justify-center flex gap-2 w-full">
							<span className="text-red-600 font-semibold">Message: </span>
							<p className="flex gap-1 text-md items-center text-gray-500">
								your email is not verified, please verify your email to
								continue.
								<p
									className="underline text-sm text-cyan-400 cursor-pointer"
									onClick={sendMail}
								>
									click here to verify
								</p>
							</p>
						</p>
					)}
					{/* PARENT! */}
					<div className=" p-1 flex gap-4 lg:w-[70vw]">
						{/* CHILD 0! */}
						<CardComponent>
							<UserMain user={user} />
						</CardComponent>

						{/* CHILD 1! */}
						<CardComponent big>
							<CompanyMain user={user} />
						</CardComponent>
					</div>
				</div>
			)}
		</>
	);
}
