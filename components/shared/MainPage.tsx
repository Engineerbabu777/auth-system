import React from "react";
import CardComponent from "./CardComponent";
import UserMain from "../UserInfo/UserMain";
import CompanyMain from "../CompanyInfo/CompanyMain";

type Props = {};

export default function MainPage({}: Props) {
	return (
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
	);
}
