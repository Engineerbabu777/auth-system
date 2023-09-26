"use client";

import Button from "@/components/shared/Button";
import useUser from "@/hooks/useUser";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

type Props = {};

export default function Page({ }: Props) {
    const { createUser } = useUser();
	const [signUp, setSignUp] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		username: "",
		number: "",
		isLoading: false,
		error: null,
	});

	// STATE HANDLER!
	const stateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSignUp({ ...signUp, [e.target.name]: e.target.value });
	};

    // ON SIGN UP HANDLER!
    
	return (
		<>
			<div className="flex flex-col justify-center items-center h-[100vh]">
				<div className="flex flex-col min-w-[400px] gap-3 overflow-auto mt-14 ">
					<div className=" text-center ">
						<h1 className="lg:text-3xl font-bold text-[#272727]">
							Create an account
						</h1>
					</div>
					<div className=" border-2 rounded-md px-4 py-6 flex flex-col gap-4  rounded-md">
						<input
							className="px-3 py-1  focus:placeholder:text-gray-500 focus:border-gray-600 outline-none focus:outline-none border-b border-gray-300 bg-inherit"
							placeholder="username"
							name="username"
							onChange={stateChangeHandler}
                            value={signUp.username}
						/>

						<input
							className="px-3 py-1  focus:placeholder:text-gray-500 focus:border-gray-600 outline-none focus:outline-none border-b border-gray-300 bg-inherit"
							placeholder="email"
							name="email"
							onChange={stateChangeHandler}
                            value={signUp.email}
						/>
						<input
							className="px-3 py-1  focus:placeholder:text-gray-500 focus:border-gray-600 outline-none focus:outline-none border-b border-gray-300 bg-inherit"
							placeholder="Mobile Number"
							name="number"
							onChange={stateChangeHandler}
                            value={signUp.number}
						/>
						<input
							className="px-3 py-1  focus:placeholder:text-gray-500 focus:border-gray-600 outline-none focus:outline-none border-b border-gray-300 bg-inherit"
							placeholder="password"
							name="password"
							onChange={stateChangeHandler}
                            value={signUp.password}
						/>
						<p className="text-center">
							<span className="text-sm text-gray-400">
								Already account ?{" "}
								<Link
									href={"/login"}
									className="hover:underline hover:text-black
								 text-gray-600 underline cursor-pointer"
								>
									Login
								</Link>
							</span>
						</p>

						<Button title="Sign Up" isSignUp onClick={() => {createUser(signUp)}} />
						{/* OR */}
						<div className="w-full my-2">
							<div className="flex items-center justify-between ">
								<div className="w-[45%] border-b-2" />
								<span className="font-semibold">OR</span>
								<div className="w-[45%] border-b-2" />
							</div>
						</div>

						<button
							type="button"
							className="border border-gray-400 rounded-md bg-gray-200 flex items-center justify-center gap-3 py-2 hover:bg-gradient-to-br hover:from-red-500/50 hover:to-blue-500/40 
							"
						>
							{/* ICON! */}
							<FcGoogle className={"w-6 h-6"} />
							{/* TEXT! */}
							<p>Login with Google</p>
						</button>
						<button
							type="button"
							className="border border-gray-400 rounded-md bg-gray-200 flex items-center justify-center gap-3 py-2 hover:bg-gradient-to-br hover:from-gray-50 hover:to-black/50"
						>
							{/* ICON! */}
							<AiFillGithub className={"w-6 h-6"} />
							{/* TEXT! */}
							<p>Login with Github</p>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
