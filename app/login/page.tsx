"use client";

import Button from "@/components/shared/Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { createElement, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ErrorHandler from "@/components/Notifications/Error";
import Success from "@/components/Notifications/Success";

export default function Login() {
	const { status, data } = useSession();
	const router = useRouter();

	console.log("CURRENT SESSION-> ", data);

	const [signUp, setSignUp] = useState({
		email: "",
		password: "",
		isLoading: false,
		error: "",
		message: "",
	});

	// STATE HANDLER!
	const stateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSignUp({ ...signUp, [e.target.name]: e.target.value });
	};

	if (signUp.error === "error") {
		toast((t: any) =>
			createElement(ErrorHandler, { t: t, message: signUp.message })
		);
		setSignUp({ ...signUp, error: "", message: "" });
	}

	if (signUp.error === "success") {
		toast((t: any) =>
			createElement(Success, {
				t: t,
				message: signUp.message,
			})
		);
		setSignUp({ ...signUp, error: "", message: "" });
		router.push("/");
	}

	return (
		<>
			<div className="flex flex-col justify-center items-center h-[100vh]">
				<div className="flex flex-col min-w-[400px] gap-3 ">
					<div className=" text-center ">
						<h1 className="lg:text-3xl font-bold text-[#272727]">Sign in</h1>
					</div>
					<div className=" border-2 rounded-md px-4 py-6 flex flex-col gap-4  rounded-md">
						<input
							className="px-3 py-1  focus:placeholder:text-gray-500 focus:border-gray-600 outline-none focus:outline-none border-b border-gray-300 bg-inherit"
							placeholder="email"
							onChange={stateChangeHandler}
							value={signUp.email}
							name="email"
						/>
						<input
							className="px-3 py-1  focus:placeholder:text-gray-500 focus:border-gray-600 outline-none focus:outline-none border-b border-gray-300 bg-inherit"
							placeholder="password"
							onChange={stateChangeHandler}
							value={signUp.password}
							name="password"
						/>
						<p className="text-end">
							<span className="text-sm text-gray-400">
								<Link
									href={"/"}
									className="hover:underline hover:text-black
								 text-gray-600 underline cursor-pointer"
								>
									Forgot Password ?
								</Link>
							</span>
						</p>
						<p className="text-center">
							<span className="text-sm text-gray-400">
								New Developer ?{" "}
								<Link
									href={"/signup"}
									className="hover:underline hover:text-black
								 text-gray-600 underline cursor-pointer"
								>
									create an account
								</Link>
							</span>
						</p>

						<Button
							title="Login"
							isSignUp
							onClick={async () => {
								const success = await signIn("credentials", {
									email: signUp.email,
									password: signUp.password,
									redirect: false,
								});

								if (success?.error) {
									setSignUp({
										...signUp,
										error: "error",
										message: success.error,
									});
								}
								if (!success?.error) {
									setSignUp({
										...signUp,
										error: "success",
										message: "Authorization successful!",
									});
								}
							}}
						/>
						{/* OR */}
						<div className="w-full my-2">
							<div className="flex items-center justify-between ">
								<div className="w-[45%] border-b-2" />
								<span className="font-semibold">OR</span>
								<div className="w-[45%] border-b-2" />
							</div>
						</div>

						<button
							onClick={async () => {
								await signIn("google", { callbackUrl: "/" });
							}}
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
							onClick={() => signIn("github", { callbackUrl: "/" })}
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
