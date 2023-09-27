import React from "react";

type Props = {
	user: any;
};

export default function CompanyMain({user}: Props) {
	return (
		<>
			<div className="py-4 pl-2">
				<h1 className="text-[#272727] text-md font-semibold">
					Company Details
				</h1>
				<div className="flex flex-col gap-1 mx-2 mt-3">
					{/*  Home */}
					<div className="flex gap-2 items-center">
						{/* ICON! */}
						<img src={"/home.png"} className="h-6 w-6" alt="text" />

						{/* TEXT! */}
						<p className="hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
							www.engineerbabu.tech
						</p>
					</div>

					{/* EMPLOYEES */}
					<div className="flex gap-2 items-center ">
						{/* ICON! */}
						<img src={"/employees.png"} className="h-6 w-6 mt-1" alt="text" />

						{/* TEXT! */}
						<p className="flex gap-2">
							<span className="text-[#272727] font-semibold text-md">
								Employees:
							</span>
							<span className="text-[#272727] text-md">10k-15k</span>
						</p>
					</div>

					{/* LOCATION */}
					<div className="flex gap-2 items-center">
						{/* ICON! */}
						<img src={"/location.png"} className="h-6 w-6" alt="text" />

						{/* TEXT! */}
						<p className="flex gap-2">
							<span className="text-[#272727] font-semibold text-md">
								Location:
							</span>
							<span className="text-[#272727] text-md">Taskim, Turkey</span>
						</p>
					</div>

					{/* NOTE */}
					<div className="ml-8">
						{/* ICON! */}
						{/* TEXT! */}
						<p className="flex gap-2">
							<span className="text-[#272727] font-semibold text-md">
								Note:
							</span>
							<span className="text-[#272727] text-md">
								I am available everyday from 11:00 AM to 4:00AM
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
