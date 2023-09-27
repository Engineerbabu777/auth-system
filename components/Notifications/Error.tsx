import React from "react";

type Props = {
	t: any;
	message: any;
};

function ErrorHandler({ t, message }: Props) {
	return (
		<>
			<div className="bg-red-600 w-full h-full py-2 px-6 rounded-md text-white">
				<span className="font-bold ">Error:</span> {message}
			</div>
		</>
	);
}

export default ErrorHandler;
