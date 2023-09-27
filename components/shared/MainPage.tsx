'use client';

import React from "react";
import CardComponent from "./CardComponent";
import UserMain from "../UserInfo/UserMain";
import CompanyMain from "../CompanyInfo/CompanyMain";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

type Props = {
	user:any
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
		router.push('/login');
	}


	return (
		<>
			{session && (
				<>
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
				</>
			)}
		</>
	);
}
