import React from "react";

type Props = {};

export default function UserMain({}: Props) {
	return (
		<>
			<div className="flex flex-col gap-1 mx-1 my-4">
				{/* IMAGE! */}
				<div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden">
					<img src={"/image.png"} className="w-full h-full" alt="text" />
				</div>

				{/* NAME & POSITION! */}
				<div className="flex flex-col">
					<p className="text-[#272727] font-semibold text-md">Engineer Babu</p>
					<p className="text-[#272727] text-sm font-[1rem]">CEO , EB Tech</p>
				</div>

				{/* TEL & EMAIL */}
				<div className="flex flex-col mt-2">
					<p className=" flex gap-2 text-[#272727] items-center -ml-1">
						{/* ICON */}
						<img src={"/phone.png"} className="w-6 h-4" alt="text" />

						{/* TEXT */}
						<span className="font-semibold text-sm text-black ml-1">
							Tel: 956 046 396
						</span>
					</p>
					<p className="text-[#272727]  flex gap-2 items-center">
						{/* ICON */}
						<img src={"/email.png"} className="w-6 h-6" alt="text" />

						{/* TEXT */}
						<span className="font-semibold text-sm ">
							Email:&nbsp;babubhai001@gmail.com
						</span>
					</p>
				</div>
			</div>
		</>
	);
}
