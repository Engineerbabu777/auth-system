'use client';



import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
	const [token, setToken] = useState("");
	const [verify, setVerified] = useState(false);
	const [error, setError] = useState(false);

	// FUNCTION TO VERIFY!
	const verifyEmail = async() => {
		try {
			const response = await fetch("/api/verifyEmail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
				},
				body: JSON.stringify({
					token: token,
				}),
			});

			if(response?.status === 200){
               
			console.log('DATA',response)

			setVerified(true);
			}

			// console.log('DATA',response)

			// setVerified(true);
		} catch (error: any) {
			console.log('ERROR-> ',error.message);
			setError(true);
		}
	};

	useEffect(() => {
		const tokenUrl = window.location.search.split("=")[1];
		setToken(tokenUrl || '');
	}, []);

	useEffect(() => {
		if (token?.length > 0) {
			verifyEmail();
		}
	}, [token]);

	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen py-2">
				<h1 className="text-4xl">Verification</h1>

				<h2 className="bg-orange-500 p-2 text-black">
					{token ? `${token}` : "no token"}
				</h2>

				{verify && (
					<h2 className="bg-green-500 p-2 text-black">
						Your email has been Verified!{" "}
						<Link href="/login" className="text-gray-600 font-semibold">
							back to login
						</Link>
					</h2>
				)}
			</div>
		</>
	);
}
