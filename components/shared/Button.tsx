type Props = {
	title: string;
	onClick: () => Promise<void>;
	isLogin?: boolean;
	isLogout?: boolean;
	isSignUp?: boolean;
};

export default function Button({
	title,
	onClick,
	isLogin = false,
	isLogout = false,
	isSignUp= false,
}: Props) {
	const logoutBtnClasses =
        "text-[#272727] border-gray-400 border rounded-md px-5 py-2 focus:ring-2 focus:ring-purple-600 hover:bg-gradient-to-br hover:from-red-600 hover:to-purple-500 hover:text-white transition duration-150";
	const loginBtnClasses =
		"text-[#272727] border-gray-400 border rounded-md px-5 py-2 focus:ring-2 focus:ring-purple-600 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-600 hover:text-white transition duration-150";
    const signUpBtnClasses =
			"text-[#272727] border-gray-400 border rounded-md px-5 py-2 mt-6 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-600 hover:text-white transition duration-150";
	return (
		<>
			<button
                className={`
                    ${isLogin && loginBtnClasses} 
                    ${isLogout && logoutBtnClasses}
					${isSignUp && signUpBtnClasses}
                    `}
				onClick={onClick}
			>
				{title}
			</button>
		</>
	);
}
