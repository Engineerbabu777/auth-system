'use client';

import Button from "@/components/shared/Button";

export default function Login() {

	
	return (
		<>
			<div className="flex flex-col justify-center items-center h-[100vh]">
				<div className="mt-24 border-2 rounded-md p-4 flex flex-col gap-4">
					<input
						className="px-3 py-1  focus:placeholder:text-gray-500 focus:border-gray-600 outline-none focus:outline-none border-b border-gray-300 bg-inherit"
						placeholder="email"
					/>
					<input
						className="px-3 py-1  focus:placeholder:text-gray-500 focus:border-gray-600 outline-none focus:outline-none border-b border-gray-300 bg-inherit"
						placeholder="password"
					/>
					<input
						className="px-3 py-1 focus:placeholder:text-gray-500 focus:border-gray-600  outline-none focus:outline-none border-b border-gray-300 bg-inherit"
						placeholder="name"
					/>
					<input
						className="px-3 py-1  focus:placeholder:text-gray-500 focus:border-gray-600 outline-none focus:outline-none border-b border-gray-300 bg-inherit"
						placeholder="username"
					/>
					<Button title="Create an account" isSignUp onClick={async() => {}} />
				</div>
			</div>
		</>
	);
}
