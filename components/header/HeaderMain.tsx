"use client";

import Image from "next/image";
import Button from "../shared/Button";

export default function HeaderMain() {
	return (
		<>
			<header className="flex bg-[#F9F5F6] lg:px-8 justify-between h-16 items-center fixed top-0 right-0 left-0 border-b border-gray-300">
				{/* RIGHT SIDE! */}
				<div className="flex gap-2 items-center">
					<Image src={"/logo.png"} width={30} height={30} alt="text" />
					<h2 className="text-gray-700 font-semibold text-xl">
						Next-Authentication
					</h2>
                </div>


				{/* LEFT SIDE! */}
				<div>
					{/* LOGIN! */}
					<Button title="Log in" onClick={async () => {}} isLogin />

					

					{/* LOGOUT! */}
				</div>
			</header>
		</>
	);
}
