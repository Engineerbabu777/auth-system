import React from "react";

type Props = {
	t: any;
	message: any;
};

export default function Success({ message }: Props) {
	return (
		<>
			<div className="bg-green-600 w-full h-full py-2 px-6 rounded-md text-white">
				<span className="font-bold ">Notification:</span> {message}
			</div>
		</>
	);
}
