"use client";

import Image from "next/image";
import Button from "../shared/Button";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function HeaderMain() {
	const router = useRouter();
	const pathname = usePathname();
	const { status, data } = useSession();

	

	console.log(router);

	return (
		<>
			<header className="flex bg-[#F9F5F6] lg:px-8 justify-between h-16 items-center fixed top-0 right-0 left-0 border-b border-gray-300">
				{/* RIGHT SIDE! */}
				<Link href={'/'} className="flex gap-2 items-center">
					<Image src={"/logo.png"} width={30} height={30} alt="text" />
					<h2 className="text-gray-700 font-semibold text-xl">
						Next-Authentication
					</h2>
				</Link>

				{/* LEFT SIDE! */}
				<div>
					{/* LOGIN! */}
					{pathname?.includes("login") && (
						<Link href={"/signup"}>
							<Button title="Sign Up" onClick={() => {}} isLogin />
						</Link>
					)}
					{pathname?.includes("signup") && (
						<Link href={"/login"}>
							<Button title="Log in" onClick={() => {}} isLogin />
						</Link>
					)}
					{data?.user.email &&
						!pathname.includes("signup") &&
						!pathname.includes("login") && (
							<Button
								title="Log out"
								onClick={() => {
									signOut();
								}}
								isLogin
							/>
						)}

					{/* LOGOUT! */}
				</div>
			</header>
		</>
	);
}
