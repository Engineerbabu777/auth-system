'use client';
import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { BsCheckCircleFill, BsImage } from "react-icons/bs";
import {AiOutlineCloseCircle} from 'react-icons/ai';
import useUser from "@/hooks/useUser";

type Props = {
	user: any;
};

export default function UserMain({ user }: Props) {
	const [mode, setMode] = useState<"view" | "edit">("view");
	const {updateUser} = useUser();

	console.log('USER: ',user)
	const [employee, setEmployee] = useState({
		username: user?.username || "",
		email: user?.email || "",
		number: user?.number || "",
		position: user?.position || "",
		image: user?.image,
		id:user?._id,
	});

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmployee({ ...employee, [e.target.name]: e.target.value });
	};

	const imageHandler = async(e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const url = 'http://api.cloudinary.com/v1_1/djo2k58eq/image/upload';
		const files = e.target.files;

		const formData = new FormData();
		formData.append('file', files[0]);
		formData.append('upload_preset', 'new-data');
	
		const data = await fetch(url, {
		  method: 'POST',
		  body: formData
		}).then((r) => r.json().then());

		console.log(data.secure_url)

		setEmployee({...employee,image:data?.secure_url as string})
	};

	// HANDLE UPDATE EMPLOYEE!
	const handleUpdateEmployee = () => {
       updateUser(setMode, employee)
	}

	return (
		<>
			<div className="flex flex-col gap-1 mx-1 my-4">
				{/* IMAGE! */}
				<div className="flex justify-between">
					<div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden relative">
						{mode === "edit" && (
							<div className="flex items-center justify-center hover:from-cyan-500 hover:to-cyan-700   absolute w-full h-12 bg-gradient-to-br from-cyan-400 to-blue-400 bottom-0 opacity-70 text-opacity-100">
								<label className="flex flex-col items-center cursor-pointer ">
									<p className="text-sm">change image</p>
									<BsImage className="w-4 h-4 text-gray-500" />
									<input type="file" hidden onChange={imageHandler} />
								</label>
							</div>
						)}
						<img src={employee.image} className="w-full h-full" alt="text" />
					</div>
					<div className="w-8 h-8 rounded-full flex items-center justify-center gap-0.5">
						{mode === "view" && (
							<BiSolidEdit
								className="w-6 h-6 text-green-600 cursor-pointer"
								onClick={() => setMode("edit")}
							/>
						)}
						{mode === "edit" && (
							<>
								<BsCheckCircleFill
									className={"w-6 h-6 text-green-500 cursor-pointer"}
									onClick={handleUpdateEmployee}
								/>
								<AiOutlineCloseCircle
									className={"w-6 h-6 text-red-500 cursor-pointer "}
									onClick={() => setMode("view")}
								/>
							</>
						)}
					</div>
				</div>

				{/* NAME & POSITION! */}
				<div className="flex flex-col">
					{mode === "edit" && (
						<>
							<input
								className="w-full px-2 border border-cyan-500 mb-1 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-cyan-400 "
								value={employee?.username}
								onChange={onChangeHandler}
								name="username"
								placeholder="Enter your name"
								type="text"
							/>
							<input
								className="w-full px-2 border border-cyan-500 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
								value={employee?.position}
								name="position"
								placeholder="Enter your job position"
								onChange={onChangeHandler}
								type="text"
							/>
						</>
					)}

					{mode === "view" && (
						<>
							{" "}
							<p className="text-[#272727] font-semibold text-md">
								{user?.username || "unknown"}
							</p>
							<p className="text-[#272727] text-sm font-[1rem]">
								{user?.position || "unknown"}
							</p>
						</>
					)}
				</div>

				{/* TEL & EMAIL */}
				<div className="flex flex-col mt-2">
					<p className=" flex gap-2 text-[#272727] items-center -ml-1">
						{/* ICON */}
						<img src={"/phone.png"} className="w-6 h-4" alt="text" />

						{/* TEXT */}
						{mode === "view" && (
							<>
								<span className="font-semibold text-sm text-black ml-1">
									Tel: {user?.number || "unknown"}
								</span>
							</>
						)}

						{mode === "edit" && (
							<>
								<input
									className="w-full px-2 border border-cyan-500 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-cyan-400 mb-0.5"
									value={employee?.number}
									name="number"
									placeholder="Enter your mobile number"
									onChange={onChangeHandler}
									type="text"
								/>
							</>
						)}
					</p>
					<p className="text-[#272727]  flex gap-2 items-center">
						{/* ICON */}
						<img src={"/email.png"} className="w-6 h-6" alt="text" />

						{/* TEXT */}
						{mode === "view" && (
							<>
								<span className="font-semibold text-sm ">
									Email:&nbsp;{user?.email}
								</span>
							</>
						)}

						{mode === "edit" && (
							<>
								<input
									className="w-full px-2 border border-cyan-500 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
									value={employee.email}
									name="email"
									placeholder="Enter your email"
									onChange={onChangeHandler}
									type="text"
								/>
							</>
						)}
					</p>
				</div>
			</div>
		</>
	);
}
