import { getCurrentUser } from "@/actions/getCurrentUser";
import HeaderMain from "@/components/header/HeaderMain";
import MainPage from "@/components/shared/MainPage";

export default async function Home() {

	const user = await getCurrentUser();

	console.log(user);

	return (
		<>
			{/* MAIN PAGE! */}
			<div className="flex items-center justify-center h-[100vh]">
			
				<MainPage user={user} />
			</div>
		</>
	);
}
