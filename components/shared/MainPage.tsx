'use client';

import React from "react";
import CardComponent from "./CardComponent";
import UserMain from "../UserInfo/UserMain";
import CompanyMain from "../CompanyInfo/CompanyMain";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

export default function MainPage({ }: Props) {
	

	const { status: sessionStatus, data: session } = useSession();
	const router = useRouter();

	if (sessionStatus === "loading") {
		return 'loading session';
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
							<UserMain />
						</CardComponent>

						{/* CHILD 1! */}
						<CardComponent big>
							<CompanyMain />
						</CardComponent>
					</div>
				</>
			)}
		</>
	);
}
