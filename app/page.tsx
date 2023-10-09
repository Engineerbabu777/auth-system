'use client';

import { getCurrentUser } from "@/actions/getCurrentUser";
import getLoggedUser from "@/actions/getLoggedUser";
import HeaderMain from "@/components/header/HeaderMain";
import MainPage from "@/components/shared/MainPage";
import { useEffect, useMemo, useState } from "react";

export default function Home() {

	// const user = await getCurrentUser();
	const [user, setUser]= useState(null);

	const getUser = useMemo(async() => {
		const user = await getCurrentUser();
		return user;
	},[]);

	const getData = async() => {
		const data = await getUser;

		console.log('DATA-> ',data)
	}

	useEffect(() => {
		getData();
	},[]);

	console.log('LOGGED USER-> ',user);

	console.log(user);

	return (
		<>
			{/* MAIN PAGE! */}
			<div className="flex items-center justify-center h-[100vh]">
			
				<MainPage user={user} />
			</div>
		</>
	);
}
